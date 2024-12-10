const authorize = (req,res,next)=>{//note that this is not how you authorize users in express' applications
    const {user} = req.query
    if(user==='john'){
        req.user = {name:'john',id:3}
        console.log('authorized!')
        next()
    }
    else{
        console.log('not authorized!')
        res.status(401).send("Unauthorized")
    }
    
    next()
}

module.exports=authorize