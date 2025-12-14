import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const NEXT_AUTH = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "example@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req): Promise<any> {
        const username = credentials?.username;
        const password = credentials?.password;
        console.log("This is your username: " ,username);
        console.log("This is your password" , password);
        return {
          id: 1,
          username: username,
        };
      },
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID || "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
    }),
    GithubProvider({
        clientId: process.env.GITHUB_ID || "",
        clientSecret: process.env.GITHUB_SECRET || ""
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages:{
    signIn: "/auth/signin"
  },
  callbacks: {
    async jwt({token,user, account,profile}: any): Promise<any>{
        console.log(token);
        if(account){
            token.id = token.sub;
            token.username = user.username
        }
        console.log(token);
        return token;
    },
    async session({session, token}: any) : Promise<any>{
        if(session && session.user){
            session.user.id = token.sub;
            session.user.username = token.username;
        }
        return session;
    }
  }
}