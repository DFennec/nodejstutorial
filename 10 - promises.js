const {readFile} = require('fs')

const getText = (path)=>{
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

//getText('./content/first.txt').then(result =>console.log(result)).catch((err)=>console.log(err))
//promise with .then and .catch, one of them will trigger once the promise is resolved

const start = async()=>{
    try {
        const first = await getText('./content/first.txt')
        const second = await getText('./content/second.txt')
        console.log(first,"\n"+second)
    }catch{
        console.log(error)
    }

}//asynchronous function
start()

//Note that asynchronous functions are usually dirtier than promises, but thanks to the wrapper function that
//bundles the promise, it is now much cleaner and can handle promises without much visual clutter