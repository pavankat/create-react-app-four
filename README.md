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

We're using react-router-dom for client side routing.

you can check this out here as a guide on react-router-dom:
https://reacttraining.com/react-router/web/example/basic

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

To Be Continued... 

## Explanations 

#### In App.js

used componentDidUpdate to clear the form after submission

https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1

#### In SongForm.js

used an uncontrolled form structure because we don't need to tie the inputs to state
