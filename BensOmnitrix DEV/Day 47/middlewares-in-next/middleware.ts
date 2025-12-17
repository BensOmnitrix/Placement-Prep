import { NextRequest, NextResponse } from "next/server";

// let requestCount = 0;
// export function middleware(req: NextRequest){
//     requestCount++;
//     const res = NextResponse.next(); // THis is the next only
//     console.log("Request Count is" , requestCount );
//     return res;
// }

// export const config = {
//     matcher: "./api/:path*"
// }

export function middleware(request: NextRequest){
    if(request.nextUrl.pathname.startsWith("/admin")){
        return NextResponse.redirect(new URL("/signin",request.url));
    }
}