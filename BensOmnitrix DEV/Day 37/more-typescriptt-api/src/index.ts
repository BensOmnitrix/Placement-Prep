interface User{
    name: string;
    age: number;
}

function sumOfAge(user1: User, user2: User){
    return user1.age + user2.age
}

const age = sumOfAge({name: "Lakshay",age: 20},{name: "Nandika",age: 18});
console.log(age);