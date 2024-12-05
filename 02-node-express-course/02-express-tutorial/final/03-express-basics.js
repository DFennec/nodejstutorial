const express = require('express')
const app = express()
//const app = require('express')() //can also work, but the first one is more common

app.get('/',(req,res)=>{
    res.status(200).send('Home Page')
})//all servers always perform a get request to show the mainpage, so this is our basic request
//this first get will always trigger every time the user navigates through the page

app.get('/about',(req,res)=>{
    res.status(200).send('About Page')
})

app.all('*',(req,res)=>{
    res.status(404).send('<h1>RESOURCE NOT FOUND!</h1>')
})//  * means all resources in the page: be it / or /about

app.listen(5000,()=>{
    
    console.log("listening on port 5000...")


})
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
