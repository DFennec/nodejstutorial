const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('request event')
    res.end('Hello World')
})

server.listen(5000,()=>{
    console.log("Server is listening on port 5000")
})//it will enable listening once the server is ran,
//but not refresh as with the request event that will log every time the page is loaded