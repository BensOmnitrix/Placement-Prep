import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, {params} : {
    params: {
        authRoutes: string[]
    }
}){
    const routes = await params;
    console.log(routes.authRoutes);
    return NextResponse.json({
        message: "hi there"
    })
}   