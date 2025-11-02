type User = {
    name: string,
    age: number
}

type SessionInfo = {
    sessionId: number,
    token: string
}

const users = new Map<User,SessionInfo>();

users.set({name: "Lakshay", age: 52}, {sessionId: 1,token :"sjldv"});