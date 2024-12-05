const http = require('http')

const server = http.createServer()

server.on('request',(req,res)=>{
    console.log('call to server')
    res.end('Welcome')
})//note that server is an event emitter that triggers at emissions named 'request'


server.listen(5000)