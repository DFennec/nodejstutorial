//  local variable
const secret="this variable is secret"
//  shared variables
const user1="john"
const user2="peter"

const sayHi=(name) =>{
    console.log(`Hello there ${name}`)
}
sayHi('susan')
sayHi(user1)
sayHi(user2)
const showModuleProperties=() =>{
    console.log(module)
}

showModuleProperties()

console.log("----------BEFORE EXPORTING---------")
//  we share whatever we want through exports, that's a module property to 
//  share variables or other data 
module.exports = {user1,user2} 
//module.exports = sayHi even functions can be exported
//  these exports can be accessed through require
showModuleProperties()