const {createReadStream} = require('fs')

const stream = createReadStream('./content/largeFile.txt',{highWaterMark: 9000})//creates a buffer that reads 64kb-chunks at a time (this file is 483kb), so it will read the file in a few batches,
//instead of reading the file in one go
//if you want to modify the size of the buffer, you can do so by adding a second parameter: '{highWaterMrk:numberOfBytes}',
//you can also add ", encoding:'utf-8'" within the brackets so that you can read the contents of the document in utf-8 encoding. This file though, will flood your
//terminal so be wary of that.
stream.on('data',(result)=>{
    console.log(result)
})