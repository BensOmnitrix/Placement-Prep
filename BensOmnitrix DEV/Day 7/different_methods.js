const express = require("express");
const port = 3000;
const app = express();
let {people} = require("./data");

app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended: false}))
app.use(express.json());

app.get('/api/people',(req,res) => {
  res.status(200).json({sucess:true, data:people})
})

app.post('/api/people',(req,res)=>{
  const {name} = req.body;
  if(!name){
    return res.status(400).json({success: false});
  }
  res.status(201).json({success: true, person:name});
})

app.post('/login',(req,res) => {
  const {name} = req.body;
  if(name){
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("PLease send valid credentials");
})

app.put('/api/people/:id',(req,res) => {
  const {id} = req.params;
  const {name} = req.body;
  const person = people.find((person => person['id'] === Number(id)));
  if(!person){
    return res.status(404).json({success: false,msg: 'np person iss present'});
  }
  const newPeople = people.map((person) => {
    if(person['id'] === Number(id)){
      if(name.empty()){
        return res.send(401).json("The name could not be empty");
      }
      person['name'] = name;
    }
    return person;
  })
  res.status(200).json({success:true,data: newPeople});
})

app.delete('/api/people/:id',(req,res) => {
  const {id} = req.params;
  const person = people.find((person => person['id'] === Number(id)));
  if(!person){
    return res.status(404).json({success: false,msg: 'no person is present'});
  }
  const newPeople = people.filter((person) => person['id'] != Number(id));
  return newPeople
})

app.listen(port,function(){
  console.log("The server is listening on port 3000");
})