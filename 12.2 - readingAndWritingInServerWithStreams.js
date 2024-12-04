var fs = require('fs')
var http = require('http')

http.createServer(function(req,res){
    /*
    const text = fs.readFileSync('./content/largeFile.txt','utf-8')
    res.end(text)
    this works the same as the below but is much less efficient and is blocking
    */
    const fileStream = fs.createReadStream('./content/largeFile.txt','utf-8')
    fileStream.on('open',()=>{//we expect an 'open' event from the server(http) emitter
        fileStream.pipe(res)//pipe pushes the read stream into write stream 

    })
    fileStream.on('error',(err)=>{//or an 'error' event from the server(http) emitter
        res.end(err)
    })
}).listen(5000)
