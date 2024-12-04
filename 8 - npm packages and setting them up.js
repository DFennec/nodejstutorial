/*
npm - global
npm --version
npm i name (install the package you want by name)

global dependency (to install a package globally so that you can use it in multiple projects)
npm install -g name (abbreviated global install)
sudo npm install -g name (same as before but with permissions)

//package.json will store info about our project and packages installed with npm
npm init -y (starts up a package by default)
//installed modules will be stored in the node_modules folder
*/


//we've installed lodash with npm with the command npm i lodash
const _ = require('lodash')

const items=[1,[2,[3,[4]]]]
const flattenedItems=_.flattenDeep(items)
console.log(flattenedItems)
//if we do not have a package we need in a project we've just downloaded or pulled from git
//you can simply write: npm install and npm will now what to download from the node_modules

//NOTE: dev dependencies are installed as follows: npm i name -D
//We've installed nodemon to restart our application every time we save our file
//We've also dadded custom commands to our package.json file so that when we type "npm start" it works as if we wrote "nodemon app.js"
//these custom commands can be named and will be run by the name we put them plus npm, like this: "npm" + "name"

//NOTE: to uninstall you just simply type: npm uninstall name
//you can also erase the entire package.json if you will so

//NOTE: if you are constantly using a given module, you might want to globally install
//a given module, as stated before type: npm install -g name
//some modules need to be installed globally, for instance, Gatsby or React
//you can run a global module anywhere with npx (or node runner)

//NOTE: in package.json, the mdoules' version is noted down by default with a '^' which means 
//that module will update whenever a major update is released, rendering your current usage/version outdated and
//, sometimes,incompatible/unusuable