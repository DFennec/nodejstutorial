const express = require('express')
//import the custom middleware we've built
const logger = require('./logger')

const app = express()

//this will add the middleware to the entire app
//app.use(logger)
//this will add the middleware to the endpoint we specify
app.use('/api',logger)//Note that it will skip the part of the url that contains api
//or anything before api

            //we've set the logger middleware in the home page endpoint
app.get('/',logger,(req,res)=>{
    res.send('Home')
})
app.get('/about',(req,res)=>{
    res.send('About')
})
app.get('/api/products',(req,res)=>{
    res.send('Products')
})
app.get('/api/items',(req,res)=>{
    res.send('Items')
})


app.listen(5000,()=>{
    console.log("listening on port 5000")
})