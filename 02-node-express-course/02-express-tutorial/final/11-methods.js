const express = require('express')
const { readFileSync } = require('fs')

const app = express()

let {people} = require('./data')

//call the static page resources
app.use(express.static('./methods-public'))
//parser that will take the name from the request body
app.use(express.urlencoded({extended:false}))
//json parser
app.use(express.json())

            //we've set the logger middleware in the home page endpoint
app.get('/',(req,res)=>{
    res.send("")
})

app.get('/api/people',(req,res)=>{

    return res.status(200).send({success:true,data:people})

})

app.post('/api/people',(req,res)=>{

    const {name}=req.body
    if(!name){
        return res.status(400).json({success:false,msg:'please provide a name'})   
    }
    return res.status(201).json({success:true,person:name})
})

app.post('/api/postman/people',(req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false,msg:'please provide a name'})   
    }
    return res.status(201).json({success:true,data:[...people,name]})
})

app.post('/login',(req,res)=>{
    const {name}=req.body
    if(name){
        return res.status(201).send(`Welcome ${name}`)
    }
    res.status(401).send(`Invalid: empty name input`)
})

app.put("/api/people/:id",(req,res)=>{
    const {id} = req.params
    const {name} = req.body

    const person = people.find((person)=>person.id===Number(id))
    if(!person){
        return res.status(404).json({success:false,msg:'no person with such id'})   
    }
    const newPeople=people.map((person)=>{
        if(person.id===Number(id)){
            person.name=name
        }
        return person
    })
    console.log(`${id} changed to ${name}`)
    return res.status(200).json({success:true,data:newPeople})
})

app.delete('/api/people/:id',(req,res)=>{//we can set the same endpoint as long as we give different actions to these endpoints
    const {id} = req.params
    
    const person = people.find((person)=>person.id===Number(id))
    
    if(!person){
        return res.status(404).json({success:false,msg:'no person with such id'})   
    }

    const newPeople = people.filter((person)=>person.id !==Number(id))//we aren't really removing 
    //any values from the list, but filtering out those with a matching id

    console.log(`User ${id} removed`)
    return res.status(200).json({success:true, data:newPeople})
})

app.listen(5000,()=>{
    console.log("listening on port 5000")
})