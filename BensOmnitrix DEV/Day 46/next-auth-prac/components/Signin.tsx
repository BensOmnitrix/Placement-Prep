"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const SigninComponent = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Enter password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div>
        <button
          className="cursor-pointer"
          onClick={async () => {
            const res = await signIn("credentials", {
              username: username,
              password: password,
              redirect: false,
            });
            if(res?.ok){
                router.push("/user");
            }
            else{
                alert("Invalid credentials");
            }
          }}
        >
          Login with credentials
        </button>
        
      </div>
      <div>
        <button className="cursor-pointer" onClick={() => signIn("google")}>Login with Google</button>
      </div>
      <div>
        <button className="cursor-pointer" onClick={() => signIn("Github")}>Login with Github</button>
      </div>
    </div>
  );
};
