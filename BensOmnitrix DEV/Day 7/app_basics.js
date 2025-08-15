const express = require("express");
const port = 3000;
const app  = express();
const path = require("path");

// setup static and middleware
app.use(express.static('./public'));

//Adding to static assets and otherwise use SSR
// app.get('/',(req,res) => {
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// })

app.all(/.*/, (req,res) => {
    res.status(404).send("Resource not found");
})



// app.get('/', (req, res) => {
//     console.log('User Hit the resource');
//     res.status(200).send("Hello World");
// });

// app.get('/about', (req, res) => {
//     res.status(200).send("About Page");
// });

// app.all(/.*/, (req, res) => {
//     res.status(404).send("<h1>Resource not found</h1>");
// });

app.listen(port, function(){
    console.log(`The server is listening on port ${port}`);
});
