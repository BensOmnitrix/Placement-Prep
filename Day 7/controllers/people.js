let {people} = require("../data");

const getPeople = (req,res) => {
  res.status(200).json({sucess:true, data:people})
}

const createPerson = (req,res)=>{
  const {name} = req.body;
  if(!name){
    return res.status(400).json({success: false});
  }
  res.status(201).json({success: true, person:name});
}

const updatePerson = (req,res) => {
  const {id} = req.params;
  const {name} = req.body;
  const person = people.find((person) => person['id'] === Number(id));
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
}

const deletePerson = (req,res) => {
  const {id} = req.params;
  const person = people.find((person => person['id'] === Number(id)));
  if(!person){
    return res.status(404).json({success: false,msg: 'no person is present'});
  }
  const newPeople = people.filter((person) => person['id'] != Number(id));
  return newPeople
}

module.exports = {
    getPeople,
    createPerson,
    deletePerson,
    updatePerson
}