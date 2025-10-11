// type Input = number | string

// function doSomething1(arr: Input[]){
//     return arr[0];
// }
// It cannot infer and user could send many inputs leading to the type errors

// function doSomethingWithGenerics<T>(arg: T):T{
    //     return arg;
    // }
    
    // const output1 = doSomethingWithGenerics<string>("harkirat");
    // const output2 = doSomethingWithGenerics<number>(5);
    
    // console.log(output1,output2)
    
function doSomething1<T>(arr: T[]):T{
    return arr[0]!;
}

const output = doSomething1<string>(["harkirat","singh","lakshay","batra"]);
console.log(output);