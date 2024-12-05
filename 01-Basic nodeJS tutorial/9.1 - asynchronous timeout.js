console.log('first')

setTimeout(()=>{
console.log('second')//second should come last because the timeout has offloaded its execution for later
},0)
console.log('third')