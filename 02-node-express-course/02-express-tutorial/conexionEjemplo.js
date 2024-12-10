const { Client } =require('pg')

const cliente = new Client(
    {
        host:'localhost',
        user:'postgres',
        password:'postgres',
        database:'ejemploNodeJs'
    }
)
cliente.connect((err)=>{
    if (err){
        throw err;
    }
    console.log("Base de datos conectada")
})
module.exports=cliente