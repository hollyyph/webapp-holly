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
const app = express()

var PORT = process.env.port || 3000

// View Engine Setup 
app.set("views", path.join(__dirname))
app.set("view engine", "ejs")

app.get("/", function(req, res) {

    // Sample date to be filled in form 
    var user = {
        firstname: 'Jason',
        lastname: 'Blossom'

        // email: 'test@gmail.com',
        // name: 'Gourav',
        // mobile: 9999999999,
        // address: 'ABC Colony, House 23, India'
    }

    res.render("Form", {
        user: user
    });
})

app.listen(PORT, function(error) {
    if (error) throw error
    console.log("Server created Successfully on PORT", PORT)
})