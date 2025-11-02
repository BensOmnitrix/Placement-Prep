import z from 'zod';
import express from 'express';

const app = express();

// Define Status Codes
enum HTTPStatusCode {
    BAD_REQUEST = 404,

}

// Define Schema
const userSchema = z.object({
    name: z.string().min(1,{message: "Name cannot be empty"}),
    email: z.email({message: "Invalid email format"}),
    age: z.number().min(18,{message: "You are less than 18 years"}).optional()
})

type FinalSchema = z.infer<typeof userSchema>

app.use(express.json());

app.put("/",(req,res) => {
    const updateParams: FinalSchema = req.body();
    const {success} = userSchema.safeParse(updateParams);

    if(!success){
        res.status(HTTPStatusCode.BAD_REQUEST).json({
            success: false
        })
        return;
    }

    res.json({
        success: true
    })
})

