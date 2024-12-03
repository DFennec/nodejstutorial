const os/*add {} if only a specific part of the module is required*/ = require('os')//os is a built-in module that comes with nodejs

/* SOME UTILITIES FROM OS MODULE */

const user = os.userInfo()

console.log(user)

console.log(`OS runtime: ${os.uptime} seconds, ${(os.uptime)/3600} hours`)

const generalOSStatus ={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    memUnderUsage: os.totalmem()-os.freemem(),
}//can build an os object
console.log(generalOSStatus)

const path = require('path')

console.log("The os path separator is: ",path.sep)

const filePath = path.join('/content','subfolder','test.txt')//it will put together the name of the folders and then the name of the archive
console.log(filePath)

const base = path.basename(filePath)//it will tell you what lies at the end of that path
console.log(base)

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')//returns the absolute path of the path you add up in its method
console.log(absolute)
