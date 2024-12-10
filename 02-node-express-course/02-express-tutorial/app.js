const express = require('express')
const { readFileSync } = require('fs')

const app = express()

const peopleRouter =require('./routes/people')
const loginRouter =require('./routes/auth')

//call the static page resources
app.use(express.static('./methods-public'))
//parser that will take the name from the request body
app.use(express.urlencoded({extended:false}))
//json parser
app.use(express.json())
//routers
app.use('/api/people',peopleRouter)
app.use('/login',loginRouter)

app.get('/',(req,res)=>{
    res.send("")
})

app.listen(5000,()=>{
    console.log("listening on port 5000")
})