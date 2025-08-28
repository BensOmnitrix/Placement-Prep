const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const JWT_KEY = "secret_key";


app.use(express.json());

app.post('/todo/add', (req,res) => {
     
})

app.put('/todo/update',(req,res) => {

})

app.get('/todo/get', (req,res) => {

})

app.delete('/todo/delete',(req,res) => {

})


app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
})