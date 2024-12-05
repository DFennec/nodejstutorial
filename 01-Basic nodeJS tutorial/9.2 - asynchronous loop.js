setInterval(()=>{
    console.log('hello world')//this will appear every 2 seconds, but the first time it will give way 
    //to other not timed out actions
},2000)
console.log('This runs first')
//Note: the loop won't stop unless killed with ctrl+c