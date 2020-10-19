// const http = require('http');

// const server = http.createServer((request, response) => {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.end("Hello World!");
// });

// const port = process.env.PORT || 1337;
// server.listen(port);

// console.log("Server running at http://localhost:%d", port);

const express = require("express")
const path = require('path')
const bodyParser = require('body-parser')
const routes = require('./routes')


const app = express()

app.use((req, res, next) => {
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': '*'
    });
    next();
});

var PORT = process.env.port || 3000

// View Engine Setup 
app.set("views", path.join(__dirname))
app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

routes(app)

// app.get("/", function(req, res) {

//     // Sample date to be filled in form 
//     var user = {
//         firstname: 'Jason',
//         lastname: 'Blossom'
//     }

//     res.render("Form", {
//         user: user
//     });
// })

app.listen(PORT, function(error) {
    if (error) throw error
    console.log("Server created Successfully on PORT", PORT)
})