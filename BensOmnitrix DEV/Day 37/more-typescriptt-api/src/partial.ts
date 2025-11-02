interface User{
    id: string;
    name: string;
    age: number;
    email: string,
    password: string
}

type UpdateParams = Pick<User,'name' | 'email' | 'password'>

type UpdateParamsOptional = Partial<UpdateParams>

function updateUser(updateParams: UpdateParamsOptional){
    // DB call
}

updateUser({
    name: "skjv"
})