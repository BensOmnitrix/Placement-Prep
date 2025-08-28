const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    todos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Todos"
    }]
})

const TodosSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

module.exports = {UserSchema, TodosSchema};