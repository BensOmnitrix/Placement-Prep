import express from "express";
import { createClient } from "redis";

const app = express();

const client = createClient();
client.on("error",(err) => console.log("Redis Client Error",err));

app.use(express.json());

app.post("/submit",async (req,res) => {
    try{
        const {problem, code, userId, language} = req.body;
        await client.lPush("submission",JSON.stringify({problem,code,userId,language}));
        res.status(200).send("Submission has been added in the queue");
    }catch(err){
        console.error("Redis error",err);
        res.status(404).send("Failed to add the submission to the client");
    }
})

async function startServer(){
    try{
        await client.connect();
        console.log("Connected to Redis");

        app.listen(3000,() => {
            console.log("Server is listening on the port 3000");
        })
    }catch(err){
        console.error("Failed to connect to Redis", err);
    }
}

startServer();