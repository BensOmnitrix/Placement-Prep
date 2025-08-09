const fs = require("fs");

// for(let i = 0;i<100000;i++){
//     fs.appendFile('big.txt',`Hello World ${i}\n`,function(){});
// }

const stream = fs.createReadStream('big.txt');

stream.on('data',function(result){
    console.log(result);
})


