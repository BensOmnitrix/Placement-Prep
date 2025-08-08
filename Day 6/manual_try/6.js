const fs = require("fs").promises

const start = async () => {
    console.log("0");
    const ans1 = await fs.readFile('a.txt','utf-8');
    console.log("1");
    const ans2 = await fs.readFile('test.txt','utf-8');
    console.log("2");
    await fs.writeFile('b.txt',ans1 + ans2);
    console.log("3");
}

start();