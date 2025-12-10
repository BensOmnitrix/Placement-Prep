"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export default function AppBar(){
    const session = useSession();
    const email = session.data?.user?.email;

    return (
        <div className="flex justify-between">
            <button onClick={() => {
                signIn();
            }} className="border-2 p-2 rounded-2xl cursor-pointer">
                Signin
            </button>
            <button onClick={() => {
                signOut();
            }} className="border-2 p-2 rounded-2xl cursor-pointer">
                Logout
            </button>

            <div>
                Your email is : {JSON.stringify(session)}
            </div>
        </div>
    )
}