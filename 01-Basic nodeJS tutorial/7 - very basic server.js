//  require is used to get the exports from a module
const http= require('http')
                                //as in request and response
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to our homepage')
    }
    if(req.url==='/about'){
        res.end('You\'ve enetered the about page')
    }
res.end(`
    <h1>Whoops</h1>
    <p>We can't find the page you are looking for</p>
    <a href="/">Homepage</a>`)
})

server.listen(5000)