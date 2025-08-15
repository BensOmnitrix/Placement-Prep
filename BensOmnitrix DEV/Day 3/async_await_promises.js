// function logThing(){
//     console.log("Hey there");
// }

// setTimeout(logThing,4000);
// console.log("Hello wworld");

// for(let i=0;i<100;i++){

// }

// const fs = require("fs");
// //File System Module
// fs.readFile("a.txt","utf-8",function(err,data){
//     console.log(data);
// });
// console.log("Hello there")

// const fs = require("fs");
// let promise = new Promise(function (resolve, reject) {
//   fs.readFile("a.txt", "utf-8", function (err, data) {
//     resolve(data);
//   });
// });
// // Imp - Promise is synchounously returned but the data comes asynchrounously
// promise.then((data) => {
//   console.log("This is the " + data);
// });
// console.log("Hi there");
// setTimeout(() => {
//   console.log("Hi there 2");
// }, 1000);
// console.log("Hi there3");

// let promise = new Promise(function(resolve){
//     resolve(0);
// })
// function onDone(data){
//     console.log(data);
// }
// console.log(promise);
// promise.then(onDone);
// console.log(promise);

function something() {
  let p = new Promise(function (resolve) {
    setTimeout(() => {
      console.log("Hey babes");
      resolve("hi there");
      console.log(p);
    }, 5000);
  });
  return p;
}

async function somethingAsync() {
  let value = await something(); // If out of function something is there to be logged after calling then it will be called als o
  console.log("Hi there");
  console.log(value); //By using await the value returned from the promise is the resolved value which could be used further in the  code or the function according to ourselves
  console.log("Hi there2");
}

somethingAsync();
