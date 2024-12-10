//used to store logic in here and make clearer routes
const db=require('../conexionEjemplo')

const getPeople = (req,res)=>{

    return res.status(200).send({success:true,data:people})

}
const createPerson = (req,res)=>{

    const {name}=req.body
    if(!name){
        return res.status(400).json({success:false,msg:'please provide a name'})   
    }
    return res.status(201).json({success:true,person:name})
}

const createPersonPostman=(req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false,msg:'please provide a name'})   
    }
    return res.status(201).json({success:true,data:[...people,name]})
}

const updatePerson=(req,res)=>{
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
}
const deletePerson=(req,res)=>{//we can set the same endpoint as long as we give different actions to these endpoints
    const {id} = req.params
    
    const person = people.find((person)=>person.id===Number(id))
    
    if(!person){
        return res.status(404).json({success:false,msg:'no person with such id'})   
    }

    const newPeople = people.filter((person)=>person.id !==Number(id))//we aren't really removing 
    //any values from the list, but filtering out those with a matching id

    console.log(`User ${id} removed`)
    return res.status(200).json({success:true, data:newPeople})
}

module.exports = {
    getPeople,
    createPerson,
    updatePerson,
    createPersonPostman,
    deletePerson
}