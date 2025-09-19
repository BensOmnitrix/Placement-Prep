import mongoose from "mongoose"

export const businessCardSchemas = new mongoose.Schema({
    name: Array,
    interests: Array,
    links: Object
})