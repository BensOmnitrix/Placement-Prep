interface User{
    name: string;
    age: number;
    email: string;
    password: string
}

const config: Readonly<User> = {
    name: "Lakshay",
    age: 45,
    email : "lakshay@gmail.com",
    password: "lvbs"
}

config.age = 4; // Error because of the readonly type