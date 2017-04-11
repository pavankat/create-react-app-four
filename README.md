deployed url: https://morning-mesa-23625.herokuapp.com/

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

## Explanations 

#### In App.js

used componentDidUpdate to clear the form after submission

https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1

#### In SongForm.js

used an uncontrolled form structure because we don't need to tie the inputs to state
