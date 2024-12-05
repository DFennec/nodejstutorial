const express = require('express')

const app = express()

const {products}=require('./data')

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1> <a href="/api/products">Products</a>')
})
app.get('/api/products',(req,res)=>{
    const newProducts = products.map((product)=>{
        const{id,name,image}=product
        return{id,name,image}
    })
    res.json(newProducts)
})
app.get('/api/products/:productId',(req,res)=>{
    console.log("REQUEST")
    console.log(req)
    console.log("REQUEST PARAMETERS")
    console.log(req.parms)

    const {productId}=req.params

    const singleProduct= products.find((product)=>product.id===Number(productId))
    
    if(!singleProduct)
    {
        return res.status(404).send("<h1>PRODUCT NOT FOUND!</h1>")
    }
    
    res.json(singleProduct)
})

app.get('/api/products/:productId/reviews/:reviewId',(req,res)=>{

    const {productId}=req.params

    const singleProduct = products.find((product)=>product.id===Number(productId))
    
    if(!singleProduct)
    {
        return res.status(404).send("<h1>PRODUCT NOT FOUND!</h1>")
    }
    


    res.json(singleProduct)
})

//this will allow us to search by: http://localhost:5000/api/v1/query?search=a&limit=3
app.get('/api/v1/query',(req,res)=>{
    //console.log(req.query)
    const {search, limit} =req.query
    let queriedProducts = [...products]

    if(search){
        queriedProducts = queriedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if (limit){
        queriedProducts = queriedProducts.slice(0,Number(limit))
    }
    if (queriedProducts.length<1)
    {
        return res.status(200).json({success:true,data:[]})//you signal with the json data the search was successful but it 
        //didn't yield any results
    }
    return res.status(200).json(queriedProducts)
})

app.listen(5000,()=>{
    console.log("listening on port 5000")
})