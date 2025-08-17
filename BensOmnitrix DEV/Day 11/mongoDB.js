const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://{username}:{password}@cluster0.m8z18gx.mongodb.net/user_db"); // USe your own connection link

const user = mongoose.model("user_collection",{
    name: String,
    email: String,
    password: String
})

const user1 = new user({
    name: "Harkirat Singh",
    email: "harkirat@gmail.com",
    password: "123456"
})

user1.save().then(function(){
    console.log("The user has been successfully added to the db");
}).catch((err) => {
    console.log("An error has been occured");
});

return;