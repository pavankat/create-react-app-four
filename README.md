## to start up app

#### in the client folder: make a file called .env

```
touch .env
```

and in it put this:

```
REACT_APP_API = "http://localhost:3001"
```

you have access to your environment variables in create-react-app all over by doing process.env.REACT_APP_API as long as you start them off with REACT_APP_

resource:

https://medium.com/@tuchk4/why-i-love-create-react-app-e63b1be689a3 

#### open up the api folder

run 

```
npm install
```

#### open up the client folder and run

```
yarn install 
```

or 

```
npm install
```

#### then in the api folder do 

```
node server.js
```

#### then at the sametime (in another terminal window) in the client folder do

```
npm start
```

## In App.js

used componentDidUpdate to clear the form after submission

https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1

## In SongForm.js

used an uncontrolled form structure because we don't need to tie the inputs to state
