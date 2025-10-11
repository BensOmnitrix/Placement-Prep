interface User {
    firstName: string,
    lastName: string,
    email: string,
    age: number
};

const isLegal = (user: User) : boolean => {
    return user.age >= 18;
}

const value: boolean = isLegal({
    firstName: "Lakshay",
    lastName: "Batra",
    age: 21,
    email: "email.batra@gmail.com"
})

console.log(value);