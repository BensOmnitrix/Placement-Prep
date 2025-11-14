import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma/client";
const prisma = new PrismaClient();

export const GET = () => {
    const name = "Lakshay Batra";
    const email = "lakshay@gmail.com";
    
    return NextResponse.json({
        email,name
    })
}

export const POST = async (req: NextRequest) => {
    //extract the body
    const body = await req.json();
    const name = body.name;
    const email = body.email;
    const password = body.password;

    const newUser = await prisma.user.create({
        data: {
            name,email,password
        },
        select: {
            id: true
        }
    })

    if(!newUser.id){
        return NextResponse.json({
            message: "User cannot be generated"
        })
    }

    return NextResponse.json({
        message: "User signup successfully"
    })
}