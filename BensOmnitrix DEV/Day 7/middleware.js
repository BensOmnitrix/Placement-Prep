const express = require("express");
const logger = require("./logger_middleware");
const authorize = require("./authorize");
const morgan = require("morgan");
const port = 3000;
const app = express();
// req => middleware => res

// app.use([logger,authorize]);

app.use(morgan('tiny'));

app.get('/',(req,res) => {
  res.send("Home");
})

app.get('/about',(req,res) => {
  // console.log(req);
  res.send("About");
})

app.get('/api/products',(req,res) => {
  // console.log(req);
  res.send("About");
})

app.get('/items',(req,res) => {
  res.send("About");
})

app.listen(port,function(){
  console.log("The server is listening on the port number 3000");
})