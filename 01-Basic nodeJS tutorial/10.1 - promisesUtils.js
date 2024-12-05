const {readFile, writeFile} = require('fs')
const util = require('util');
/*these two functions could be ommited if we remove the util import and they'll still work by doing this in the start function:
const start = async()=>{
    try {
        const first = await readFile('./content/first.txt','utf-8')
        const second = await readFile('./content/second.txt','utf-8')
        await writeFile('./content/result-utilsPromises.txt',`THIS IS AWESOME: ${first},${second}`)
        console.log(first,"\n"+second)
    }catch{
        console.log(error)
    }

}
*/
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)
//getText('./content/first.txt').then(result =>console.log(result)).catch((err)=>console.log(err))
//promise with .then and .catch, one of them will trigger once the promise is resolved

const start = async()=>{
    try {
        const first = await readFilePromise('./content/first.txt','utf-8')
        const second = await readFilePromise('./content/second.txt','utf-8')
        await writeFilePromise('./content/result-utilsPromises.txt',`THIS IS AWESOME: ${first},${second}`)
        console.log(first,"\n"+second)
    }catch{
        console.log(error)
    }

}//asynchronous function
start()

/*const getText = (path)=>{
    return new Promise((resolve, reject)=>{
        readFile(path,'utf-8',(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}
*/


//Note that asynchronous functions are usually dirtier than promises, but thanks to the wrapper function that
//bundles the promise, it is now much cleaner and can handle promises without much visual clutter