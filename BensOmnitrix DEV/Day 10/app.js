const express = require("express");
const z = require("zod");
const app = express();

const schema = z.array(z.number());

const newSchema = z.object({
    email: z.email(),
    password: z.string(),
    country: z.literal("IN").or(z.literal("US")),
    kidneys: z.array(z.number())
})

app.use(express.json());

app.post('/health-checkup',(req,res) => {
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;
    const response = schema.safeParse(kidneys);
    if(!response.success){
        res.status(411).json({
            success: false,
            msg: "Input is invalid"
        })
    }
    res.send(response);
})

app.listen(3000,function(){
    console.log("The server is running on 3000");
})