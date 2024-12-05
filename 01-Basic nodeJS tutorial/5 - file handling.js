//  require is used to get the exports from a module
const {readFileSync ,writeFileSync}/*partial import of the fs library*/ = require('fs');//this is the same as doing fs.readFileSync and fs.writeFileSync

const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')
console.log(first,"\n"+second)
//Simple File Writing, erase on (rewrite)
//writeFileSync("./content/result-sync.txt",`Here is the result:\n${first}\n${second}`)
//File Writing with previous content preservation
writeFileSync("./content/result-sync.txt",`\n----------\nWhat appears above this was before executing the code in app.js`,{flag:"a"})