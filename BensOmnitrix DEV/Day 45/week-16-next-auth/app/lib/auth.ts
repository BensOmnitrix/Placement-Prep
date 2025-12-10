import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";


export const NEXT_AUTH = {
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Username" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      //@ts-ignore
      async authorize(credentials: any) {
        console.log(credentials);
        // do db validation and other logic
        return {
          //here all the things you want in the token is provided so that it could be put in the token
          id: 15,
          email: "lakshay@gmail.com",
        };
      },
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID || "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
    }),
    GitHubProvider({
        clientId: process.env.GITHUB_ID || "",
        clientSecret: process.env.GITHUB_SECRET || ""
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: ({ token }: any) => {
      console.log(token);
      token.id = token.sub;
      return token;
    },
    session: ({session, token, user}: any) => {
        session.user.id = token.id;
        console.log(session);
        return session
    }
  },
  pages: {
    signIn: "/signin"
  }
}