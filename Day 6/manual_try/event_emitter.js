const EventEmitter = require('events');
const fs = require('fs');
const customEmitter = new EventEmitter();
customEmitter.on('readFile',function(data){
    console.log('2');
})

customEmitter.on('readFile',function(data){
    console.log(data);
})

fs.readFile('a.txt','utf-8',function(err,data){
    customEmitter.emit('readFile',data);
})

console.log('Hey Bro How are you');