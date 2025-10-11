// function maxValue(arr: number[]){
//     let max = arr[0]!;
//     for(let i=0;i<arr.length;i++){
//         if(max < arr[i]!){
//             max = arr[i]!;
//         }
//     }
//     return max;
// }

// console.log(maxValue([1,2,3,5,1,5,8,15]));

interface User {
  firstName?: string;
  lastName?: string;
  age: number;
}

function isLegal(age: number) {
  return age >= 18;
}

function filterUsers(users: User[]) {
  return users.filter((user) => isLegal(user.age));
}

console.log(
  filterUsers([
    {
      firstName: "Lakshay",
      lastName: "Batra",
      age: 10,
    },
    {
      firstName: "Lakshay",
      lastName: "Batra",
      age: 15,
    },
    {
      firstName: "Lakshay",
      lastName: "Batra",
      age: 20,
    },
    {
      firstName: "Lakshay",
      lastName: "Batra",
      age: 25,
    },
    {
      firstName: "Lakshay",
      lastName: "Batra",
      age: 22,
    },
  ])
);
