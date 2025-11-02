// Old Way

// type User = { 
//     id: string;
//     password: string;
// }

// type Users = {
//     [key: string] : User
// }

// const users = {
//     "abc@123":{
//         id: "abc@123",
//         password: "slkvn",
//     },
//     "bcd@213":{
//         id: "bcd@213",
//         password: "slkvn"
//     }
// }

// Record Way

type StringorNumber = string | number;
type User = {
    age: number,
    email: string
}

type Users = Record<StringorNumber, User>;

const constraintObject = {
    "Lakshay": {
        age: 45,
        email: "lakshay@gmail.com"
    },
    65: {
        age: 24,
        email: "kjfb"
    }
}