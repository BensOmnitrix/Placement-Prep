"use client"

import { ReactHTMLElement, useState } from "react"
import { Button } from "./Button"
import { Heading } from "./Heading"
import { InputBox } from "./InputBox"
import { SubHeading } from "./SubHeading"
import axios from "axios"
import { useRouter } from "next/navigation"

export const SignupComponent = () => {
    const [name, setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const router = useRouter();

    const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleClick = async () => {
        const response = await axios.post("http://localhost:3000/api/user",{
            name,email,password
        })
        router.push("/landing")
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="border-2 w-90 rounded-md">
                <Heading label={"Signup"}></Heading>
                <SubHeading label={"Enter your details to create"} />
                <SubHeading label={"account"} />
                <InputBox onChange={handleNameInput} label={"Name"} placeholder={"Enter your name"} type={"text"}/> 
                <InputBox onChange={handleEmailInput} label={"Email"} placeholder={"m@example.com"} type={"text"}/>
                <InputBox onChange={handlePasswordInput} label={"Password"} placeholder={"Enter your password"} type={"password"} />
                <Button onclick={handleClick} label={"Signup"}/>
            </div>
        </div>
    )
}