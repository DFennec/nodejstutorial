const EventEmitter = require('events')

const customEmitter = new EventEmitter()

/*Make an async function that waits to receive the emission named 'respoonse'
once the emission 'response' is emitted it will trigger what's within the callback function of .on()*/
customEmitter.on('response',()=>{
    console.log(`data received`)
})
//below is the emission 'response'
customEmitter.emit('response')

customEmitter.emit('response','otherResponse','error','exitButton')//if you pass onmore parameters they'll be taken as other emissions
//by the way, you can use the arguments within the emission to inject them into other functions:
customEmitter.on('response',(half,hour,minute)=>{
    console.log(`data received at: ${hour}:${minute} ${half}`)
})
customEmitter.emit('response','am',10,30)


customEmitter.on('response',()=>{
    console.log(`something else`)
})
//as you can see, this event takes place after the emission,
//hence it isn't triggered due to the code not featuring any other emission of 'response'