/*
npm - global
npm --version
npm i name (install the package you want by name)
global dependency (install this package globally so that you can use it in multiple projects)
npm install -g name (same as before but abbreviated)
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