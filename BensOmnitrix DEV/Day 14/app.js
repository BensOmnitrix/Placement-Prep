const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get('/sum',(req,res) => {
    const {a,b} = req.query;
    const sum = parseInt(a) + parseInt(b);
    res.send(sum.toString());
})

app.get('/interest',(req,res) => {
    const {principal,roi,time} = req.query;
    const simpleInterest = parseInt(principal)*parseInt(roi)*parseInt(time)/100;
    res.send(simpleInterest.toString());
})

app.listen(3000,function(){
    console.log("The server is listening on the port 3000");
})