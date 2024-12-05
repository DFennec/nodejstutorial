const http = require('http')
const {readFileSync}=require('fs')

//get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeSyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server=http.createServer((req,res)=>{
    console.log(req.method)//shows the HTTP verb of the request (GET/PUT/PATCH/DELETE,etc.)
    console.log(req.url)//show the resource the user is accessing (what goes after the slash) f.i.: localhost:5050/house
    //here the resource would be house
    
    const url=req.url

    if(url==='/'){
        res.writeHead(200,{'content-type':'text/html'})//used to write headers, starting by the statuS CODE, the type of  content
        /*NOTE: EXPRESS DOES TAKE CARE OF HEADERS*/
        res.write(homePage)//here we werite the content, we can use as many .write() as needed
        res.end()
    }
    else if(url==='/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>About</h1>')
        res.end()
    }
    else if(url==='/styles.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeStyles)
        res.end()
    }
    else if(url==='/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'})
        res.write(homeImage)
        res.end()
    }
    else if(url==='/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(homeLogic)
        res.end()
    }
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1>Page not found</h1>')
        res.end()

    }
    //if we do not call the end method, the response will never be complete and, therefor
    res.end()//will never reply with the webpage fully loaded, will keep loading forever
    })

server.listen(5000)

//if doubts arise SUGGESTED SOURCCE: developer.mozilla.org
