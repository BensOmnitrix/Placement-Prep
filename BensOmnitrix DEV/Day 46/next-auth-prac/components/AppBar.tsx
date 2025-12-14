"use client"
import { signIn, signOut, useSession } from "next-auth/react";

export default function AppBar(){
    const session = useSession();
    return (
        <div>
            <div>
                <button className="cursor-pointer p-5 border-2 rounded-xl" onClick={() => signIn()}>Signup</button>
            </div>
            <div>
                <button className="cursor-pointer p-5 border-2 rounded-xl" onClick={() => signOut()}>Logout</button>
            </div>
            <div>
                {JSON.stringify(session)};
            </div>
        </div>
    )
}