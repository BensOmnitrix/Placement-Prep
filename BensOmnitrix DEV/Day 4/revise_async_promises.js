const fs = require("fs");

function readFile(){
    let p = new Promise(function(resolve,reject){
        fs.readFile("a.txt","utf-8",function(err,data){
            resolve(data);
        })
    })
    return p;
}

let promise = readFile().then(syncTask1);

function syncTask1(data){
    console.log(data);
}

