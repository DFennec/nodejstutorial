const {readFile} = require('fs')

console.log('started a first task')
//CHECK FILE PATH!!
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        return
    }
    console.log(result)
    console.log('completed first task')
})
console.log('starting next task')//this hsould come before the readFile block, since this is lienar execution,
//and the rest is offloaded to make way for this line, so we don't have to wait for the info to be gathered