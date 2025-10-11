// function greet(firstname: string,lastName: string, age: number){
//     console.log(`Hello ${firstname}`)
// }

// greet("harkirat","singh",24);

//Sum 
// function sum(a: number, b: number): number{
//     return a + b;
// }

// console.log(sum(1,2));



// const age:number = 15;
// const value: boolean = isLegal(age);
// console.log(value);

function isLegal(age:number):boolean{
    return age > 18 ? true: false;
}


function run(isLegal: (age: number) => boolean){
    setTimeout(() => {
        console.log(isLegal(20));
    },1000);
}

run(isLegal);