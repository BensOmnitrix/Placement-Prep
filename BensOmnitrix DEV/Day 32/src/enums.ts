enum Direction{
    up,down,right,left
}

function doSomething(keyPresssd: Direction){
    if(keyPresssd == Direction.down){

    }//...
}

console.log(Direction.up);   // 0
console.log(Direction.down);  // 1
console.log(Direction.left);  // 3
console.log(Direction.right);  // 2

//Could also be changed by assigning it to some values
// If declaredd use this everywhere and not the string or any other constat literals

