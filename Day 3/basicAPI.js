let firstName = "lakshay Batra Batra Batra";
// console.log(firstName.length);

// console.log(firstName.indexOf("Batra"));
// console.log(firstName.lastIndexOf("Batra"));

// console.log(firstName.slice(0,5));


// function cutIt(str,startIndex,endIndex){
//     let newStr = "";
//     for(let i=0;i<str.length;i++){
//         if(i >= startIndex && i < endIndex){
//             newStr += str[i];
//         }
//     }
//     return newStr;
// }

// const str = "hello world";
// console.log(str.replace("hello","javascript"));

// const str = "hi my name is harkirat";
// console.log(str.split(" "));

// const str = "      harkirat singh    ";
// console.log(str.trim());

//toUpperCase,, toLowerCase

// console.log(parseInt("42"));
// console.log(parseInt("42pxfkdb"));
// console.log(parseInt("3.02554"));

const initialArray = [1,2,3];
// initialArray.push(2);
// console.log(initialArray);

// initialArray.pop();
// console.log(initialArray);
// initialArray.shift();
// console.log(initialArray);
// initialArray.unshift(0);
// console.log(initialArray);
// const secondArray = [4,5,6];
// console.log(initialArray.concat(secondArray));


// for(i in initialArray){
//     console.log(i);
// }

// function logThing(str){
//     console.log(str);
// }
// initialArray.forEach(logThing);

// class Animal{
//     constructor(name, legCount, speaks){
//         this.name = name;
//         this.legCount = legCount;
//         this.speaks = speaks;
//         this.counter = 0;
//     }
//     static count(){
//         this.counter++;
//         console.log(this.counter);
//     }
//     speak(){
//         console.log(`${this.name} speaks ${this.speaks}`)
//     }
// }

// let dog = new Animal("dog",4,"bow bow");
// let cat = new Animal("cat",4,"meow");

// cat.speak();
// Animal.count();
// Animal.count();

// const users = {
//     name: "harkirat",
//     age: 24,
//     gender: "male"
// }

// console.log(users["name"]);

// const users = '{"name": "harkirat","age": 24,"gender": "male"}';

// const user = JSON.parse(users);
// console.log(user);

// console.log(JSON.stringify(user));

const obj = {
    key1: "value1",
    key2 : "value2",
    key3: "value3"
}
console.log(obj);

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
console.log(obj.hasOwnProperty("key1"));

console.log(Object.assign({},obj,{newProp:"Hey there"}));