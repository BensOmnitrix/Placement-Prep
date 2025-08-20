const express = require("express");
const app = express();

const cors  = require("cors");

app.use(cors());

app.get('/todos',(req,res) => {
    let randomLength = parseInt(Math.random()*10);
    if(randomLength == 0){
        randomLength = 1;
    }
    let todoArrayObj = [];
    for(let i=0;i<randomLength;i++){
        let id = parseInt(Math.random()*10);
        if(id == 0){
            id = 10;
        }
        todoArrayObj.push({
            id: id,
            title: `This is todo ${id}`,
            completed: false
        })
    }
    res.status(200).json({
        todos: todoArrayObj
    })
})

app.listen(3000,function(){
    console.log("The server is listening on the port 3000");
    
})