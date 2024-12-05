const express = require('express')
const path=require('path')

const app = express()

// setup static and middleware - even though we are manipulating static stuff with js we currently can't do so with these methods
app.use(express.static('./public'))//there's usually a folder called public that's used to get access to the page's resources

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))//this will change the page served to the index,
    //since it is the home page
})

app.all('*',(req,res)=>{
    res.status(404).send("<h1>404: NOT FOUND</h1>")
})

app.listen(5000,()=>{
    console.log("listening on port 5000...")
})