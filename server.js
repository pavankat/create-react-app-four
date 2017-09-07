// Dependencies
var express = require("express");
var mongojs = require("mongojs");
var logger = require("morgan");
var bodyParser = require('body-parser');
var Spotify = require("node-spotify-api");
var request = require('request');
var path = require('path');
var spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
});

var PORT = process.env.PORT || 3001;
var app = express();

// Set the app up with morgan
app.use(logger("dev"));

app.use(bodyParser());

// Database configuration
var databaseUrl = process.env.MONGODB_URI || "songs_db";
var collections = ["songs"];

// Hook mongojs config to db variable
var db = mongojs(databaseUrl , collections);

// Log any mongojs errors to console
db.on("error", function(error) {
  console.log("Database Error:", error);
});

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

/*
  if we don't do this here then we'll get this error in apps that use this api

  Fetch API cannot load No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin is therefore not allowed access. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

  read up on CORs here: https://www.maxcdn.com/one/visual-glossary/cors/
*/
  //allow the api to be accessed by other apps
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
    next();
  });

// movie Routes
  app.get("/movies/:movie", function(req, res) {
    var url = "http://www.omdbapi.com/?t=" + req.params.movie;

    request(url, function (error, response, body) {
      res.json(JSON.parse(response.body));
    });
  });


// songs Routes
// ======
  //documentation for mongojs:
    //https://github.com/mafintosh/mongojs

  app.get("/songs", function(req, res) {

    //sort songs
    db.songs.aggregate(
       [
         { $sort : { votes : -1 } }
       ], function(error, songs){

        res.json(songs);
    });

    // Find all songs in the songs collection
      // db.songs.find({}, function(error, songs) {
      //   // Log any errors
      //   if (error) {
      //     console.log(error);
      //   }
      //   // Otherwise, send json of the songs back to user
      //   // This will fire off the success function of the ajax request
      //   else {
      //     //pretend that it takes 5 seconds to get the songs back
      //     //setTimeout(function(){
      //       res.json(songs);
      //     //}, 5000)
      //   }
      // });
  });

  // Handle form submission, save submission to mongo
  app.post("/songs", function(req, res) {

    // Insert the song into the songs collection
    db.songs.insert(req.body, function(error, savedSong) {
      // Log any errors
      if (error) {
        console.log(error);
      }else {
        //the reason why we are sending the savedSong back is because we now have an _id to give to the client
        res.json(savedSong);
      }
    });
  });

  app.get("/songs/:artist/:songname", function(req, res) {

    var query = req.params.songname;

    spotify.search({ type: "track", query:  query}, function(err, data) {
      if (err) res.json(err);
      // console.log(data)
      var songs = data.tracks.items;
      var data = [];

      // Helper function that gets the artist name
      var getArtistNames = function(artist) {
        return artist.name;
      };

      for (var i = 0; i < songs.length; i++) {
        data.push({
          "artist": songs[i].artists.map(getArtistNames),
          "songName": songs[i].name,
          "previewSong": songs[i].preview_url,
          "album": songs[i].album.name
        });
      }

      res.json(data);
    });
  })

  //one song
  app.get("/songs/:id", function(req, res) {
    db.songs.findOne({
      "_id": mongojs.ObjectId(req.params.id)
    }, function(error, oneSong) {
      if (error) {
        res.send(error);
      }else {
        res.json(oneSong);
      }
    });
  });

  //update a song
  app.put("/songs/:id", function(req, res) {
    //if we use this then we won't get the updated document back
    /*
      db.songs.update({
        "_id": mongojs.ObjectId(req.params.id)
      }, {
        $set: {
          "artist": req.body.artist,
          "songName": req.body.songName
        }
      }, function(error, editedSong) {
        if (error) {
          res.send(error);
        }else {
          res.json(editedSong);
        }
      });
    */

    db.songs.findAndModify({
      query: {
        "_id": mongojs.ObjectId(req.params.id)
      },
      update: { $set: {
        "artist": req.body.artist, "songName": req.body.songName }
      },
      new: true
      }, function (err, editedSong) {
          res.json(editedSong);
      });
  });

  // /songs/votes/j483u843384/up 

  // /songs/votes/j483u843384/down

  // /songs/votes/j483u843384/alabama

  app.put("/songs/votes/:id/:direction", function(req, res){

    var voteChange = 0;

    if (req.params.direction == 'up') voteChange = 1;
    else voteChange = -1;

    //this is wrong I want to grab the current votes and increment by 1
    db.songs.findAndModify({
      query: {
        "_id": mongojs.ObjectId(req.params.id)
      },
      update: { $inc: { votes: voteChange} },
      new: true
      }, function (err, editedSong) {
          res.json(editedSong);
      });
  });

  app.delete("/songs/:id", function(req, res) {
    var id = req.params.id;

    db.songs.remove({
      "_id": mongojs.ObjectID(id)
    }, function(error, removed) {
      if (error) {
        res.send(error);
      }else {
        res.json(id);
      }
    });
  });

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, './client/public/index.html'));
  });

// Listen on port 3001
  app.listen(PORT, function() {
    console.log('🌎 ==> Now listening on PORT %s! Visit http://localhost:%s in your browser!', PORT, PORT);
  });
