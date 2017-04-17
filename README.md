# MERN Stack app with Uncontrolled Components (no refs)

deployed url: https://morning-mesa-23625.herokuapp.com/

The inputs in this app aren't tied to state so it's an uncontrolled app.

server.js contains an api of a songs_db with one collection called songs.

The routes in the server.js file are prepended with /songs and are on port 3001

checkout localhost:3001/songs in your browser to see all the songs in your database (you'll have none by default)

each document in the songs collection looks like this: 

```
{
_id: "58ec00e7dbd3e4a48360a65b",
artist: "Celine Dion",
songName: "My Heart Will Go On",
votes: 9
}
```

We're using react-router-dom for client side routing (we're leveraging react router 4)

### a good explanation of client side vs server side routing:

taken from here: http://stackoverflow.com/questions/23975199/when-to-use-client-side-routing-or-server-side-routing

```
with server-side routing you download an entire new webpage whenever you click on a link,
with client-side routing the webapp downloads, processes and displays new data for you.
Imagine the user clicking on a simple link:  <a href="/hello">Hello!</a>

On a webapp that uses server side routing:

The browser detects that the user has clicked on an anchor element.
It makes an HTTP GET request to the URL found in the href tag
The server processes the request, and sends a new document (usually HTML) as a response.

The browser discards the old webpage altogether, and displays the newly downloaded one.

If the webapp uses client side routing:

The browser detects that the user has clicked on an anchor element, just like before.

A client side code (usually the routing library) catches this event, detects that the URL is not an external link, and then prevents the browser from making the HTTP GET request.
The routing library then manually changes the URL displayed in the browser (using the HTML5 history API, or maybe URL hashbangs on older browsers)

The routing library then changes the state of the client app. For example, it can change the root React/Angular/etc component according to the route rules.

The app (particularly the MVC library, like React) then processes state changes. It renders the new components, and if necessary, it requests new data from the server. But this time the response isn't necessarily an entire webpage, it may also be "raw" data, in which case the client-side code turns it into HTML elements.
Client-side routing sound more complicated, because it is. But some libraries really make it easy these days.

There are several upsides of client-side routing: you download less data to display new content, you can reuse DOM elements, display loading notifications to user etc. However, webapps that generate the DOM on server side are much easier to crawl (by search engines), thereby making SEO optimization easier. Combining these two approaches is also possible, the excellent Flow Router SSR is a good example for that.
```

routing in react is weird. It's not great for SEO and doesn't work for all circumstances. We're using it here as a test case. In reality, you should do server side routing and rendering for important SEO pages, and use react in portions of your website that need the interactivity. 

You can read more about the weirdness here: http://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writting-manually

you can check this out here as a guide on react-router-dom (react router 4):
https://reacttraining.com/react-router/web/example/basic

Here's some great training on the new version of react router (4):
https://github.com/joemaddalone/egghead-react-router-v4 

There's some great training here on the old react-router (2.8):
https://github.com/ReactTraining/react-router

Why Uncontrolled? Because you don't need your inputs to be tied to state if you're just using them to submit data. 

you can check out this reference here:
https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/

## to install the app

#### make sure mongo is running on your computer

if you go to the terminal or gitbash, you should be able to type:

```
mongo 
```

and see the mongo console

if you don't then you have to probably do 

```
mongod 
```

in a new terminal window to start up mongo

#### in the main folder of the app 

run

```
yarn install 
```

or 

```
npm install
```

#### open up the client folder

run 

```
yarn install
```

or 

```
npm install
```

## to start up the app

#### in the main folder run

```
node server.js
```

#### then at the sametime (in another terminal window) in the client folder do

```
npm start
```

or 

```
yarn start
```

## How to deploy this app to Heroku

push up the repo to github

```
heroku create
```

go to heroku and add mlab to your heroku app

if you don't know what the name of your app is, you can go to your app in the terminal and do 

```
git remote -v 
```

and it'll tell you what your heroku app is

in your server.js file of the main app you make sure you're doing the following things: 

```
//use the server port if it's available (meaning we're on production) otherwise use 3001
var PORT = process.env.PORT || 3001;

//use the mongo database on production - but if it doesn't exist use "songs_db" for development purposes
var databaseUrl = process.env.MONGODB_URI || "songs_db";

// if we're on production then be sure to use the client/build folder as the public folder for assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

//the index.html file will load from here when the heroku url is reached on the root (/)
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './client/public/index.html'));
});
```

before you deploy to heroku you need to 

go into your client folder

and do 

```
yarn build
```

to get your react code ready for production

## Explanations 

#### In App.js

used componentDidUpdate to clear the form after submission

https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1

#### In SongForm.js

used an uncontrolled form structure because we don't need to tie the inputs to state
