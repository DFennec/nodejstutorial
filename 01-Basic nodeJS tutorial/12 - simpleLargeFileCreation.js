const {writeFileSync} = require('fs')
for (let i=0;i<10000;i++)
{
    writeFileSync('./content/largeFile.txt','Hey, there!\n',{flag:'a'})
}