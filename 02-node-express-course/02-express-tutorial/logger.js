const logger = (req,res,next)=>{
    const method =req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method,url,time)
    //pass onto the next middleware or to the send of the endpoint
    next()
}

module.exports=logger