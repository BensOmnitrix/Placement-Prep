const axios = require("axios");

// function main() {
//     const res = fetch("https://..").then(response => {
//         const data = response.json().then(data => data);
//         return data;
//     })
// }

async function main(){
    const response = await axios.get("dkunrnbe...",{
        //body in case of POST and PUT request and for GET request only send the query parameters
    },{
        // headers:{
        //     "Authorization": "Bearer 243541"
        // }
    })
}

main();