const express = require("express");
// const port = 3000;
const port = process.env.PORT || 3000;

const app = express();
const path = require('path');
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get('/',function(req,res){
    res.send("Hello World");
})

app.post('/post',function(req,res){
    console.log(req.headers['authorization']);
    console.log(req.body)
    console.log(req.query.message);
    res.send({
        msg: '2+2 = 4' 
    })
});

app.get('/route-handler',function(req,res){
    //req consists of headers,body, query parameters
    res.json({
        name: "Harkirat",
        age: 21
    })
})

app.get('/conversations',function(req,res){
    res.sendFile(path.join(__dirname,"index.html"));
})

app.get("/try",function(req,res){
    res.send("<b>Hi bro</b>")
})

app.listen(port,function(){
    console.log("The server is successfully running on the port number " + port);
})