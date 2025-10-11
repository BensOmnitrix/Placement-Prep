interface Person {
    name: string,
    age: number,
    greet(phrase: string) : void
}

class Employee implements Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    greet(phrase:string){
        console.log(`${phrase} ${this.name}`);
    }

    hi(){
        console.log("Hey buddy");
    }
};

const obj = new Employee("Lakshay",21);
obj.greet("Hi");
obj.hi();