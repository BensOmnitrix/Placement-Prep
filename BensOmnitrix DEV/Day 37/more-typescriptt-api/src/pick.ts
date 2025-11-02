interface User{
    id: string;
    name: string;
    age: number;
    email: string,
    password: string
}

type newType = Pick<User, 'name' | 'age' | 'password' >
function updateUser(updateParams: newType){
    // hit the database to update the suer
    // DB call
}