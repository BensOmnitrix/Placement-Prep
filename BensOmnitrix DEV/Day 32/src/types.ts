// type User = {
//     firstName: string,
//     lastName: string,
//     age: number
// }

// type GreetArgs = boolean | string | number //Union of many data types to form a new data type

// function GreetArg(a : GreetArgs){
//     console.log(a);
// }

// GreetArg(1);
// GreetArg("1");
// GreetArg(false)

type Employee = {
    name: string,
    startDate: Date,
}

interface Manager {
    name: string,
    department: string
}

type TeamLeader = Employee & Manager;

const teamLeader: TeamLeader = {
    name: "Lakshay",
    startDate: new Date(),
    department: "CS "
}