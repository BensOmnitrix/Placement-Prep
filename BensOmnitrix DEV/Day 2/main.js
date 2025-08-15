// let firstName = "harkirat";
// let age = 18;
// let isMarried = true;

// if(isMarried && false){
//     console.log("Married");
// }
// else if(isMarried){
//     console.log("Married");
// }
// else{
//     console.log("Not married");
// }

// let sum = 0;
// for(let i=0;i<1000;i++){
//     sum += i;
// }
// console.log(sum);


//Arrays

// const personArray = ["harkirat","raman","lakshay"];

// console.log(personArray[0]);
// console.log(personArray[1]);
// console.log(personArray[2]);

// const age = [1,2,3,4,5];
// const numberOfPeople = age.length;
// for(let i=0;i<numberOfPeople;i++){
//     if(age[i]%2 == 0){
//         console.log(age[i]);
//     }
// }

//Objects

// const users1 = {
//     firstName: "lakshay",
//     gender: "male"
// }

// console.log(users1["gender"]);

// const allUsers = [
//     {
//         firstName: "harkirat",
//         gender: "male"
//     },
//     {
//         firstName: "lakshay",
//         gender: "male",
//     },
//     {
//         firstName: "priya",
//         gender: "female"
//     }
// ]

// for(let i=0;i<allUsers.length;i++){
//     if(allUsers[i]["gender"] == "female"){
//         console.log(allUsers[i]["firstName"]);
//     }
// }

//Funtions

// function findSum(a,b){
//     return a+b;
// }
// const x = findSum(2,4);
// console.log(x);


// function sum(num1,num2,fnToCall, fnToCall2){
//     let result = num1 + num2;
//     fnToCall(result);
//     fnToCall2(result);
// }

// function displayResult(data){
//     console.log("Result of the sum is: " + data);
// }

// function displayResultPassive(data){
//     console.log("sum's result is : " + data);
// }

// sum(1,2,displayResult, displayResultPassive);

// function greet(){
//     console.log("Hello World");
// }

// setTimeout(function greet(){
//     console.log("Hello World");
// },3*1000);

// let count = 30;
// let intervalID = setInterval(function(){
//     console.log(count);
//     if(count == 0){
//         clearInterval(intervalID);
//     }
//     count = count - 1;
// },400)
            
// let start = new Date().getTime();
// let time = 0;
// setTimeout(function(){
//     let end = new Date().getTime();
//     console.log(end-start)
// },1000);

// console.log("Hi babe")

let hours = new Date().getHours();
let min = new Date().getMinutes();
let sec = new Date().getSeconds();

let intervalId = setInterval(() => {
    console.log(`${hours}:${min}:${sec}`);
    sec++;
    if(sec == 60){
        min += 1;
        sec = 0;
    }
    if(min == 60){
        hours += 1;
        min = 0;
    }
    if(hours == 24){
        hours = 0;
    }
}, 500);