import express from "express"
import  cookieParser from "cookie-parser"
import cors from "cors"
import jwt, { type JwtPayload } from "jsonwebtoken"

const app = express();
const JWT_SECRET = "test123";

app.use(cookieParser());
app.use(express.json());
app.use(cors({  
    credentials: true,
    origin: "http://localhost:5173"
}));

app.post("/signin",(req,res) => {
    const {email, password} = req.body;
    //do all the db calls and stuff
    //Fetch id lets say => 1
    const id = 1;
    const token = jwt.sign({id: id}, JWT_SECRET);
    res.cookie("token",token);
    return res.json({
        message: "Logged in and cookie has been set"
    })
})


app.get("/user",(req,res) => {
    const token = req.cookies.token;
    const payload = jwt.verify(token,JWT_SECRET) as JwtPayload;
    //Check is the id present and return the info from the database directly
    return res.json({
        id: 1
    })
})

app.post("/logout",(req,res) => {
    res.clearCookie("token");
    return res.json({
        message: "You are logged out"
    })
})

app.listen(3000, () => {
    console.log("Server is listnenng on port 3000");
})

