const express = require('express');
const app = express();

app.get('/', (request, response)=> {
    response.send(JSON.parse(userJSON));
})


app.post('/', (request, response)=> {

    response.send(userJSON);
})

app.delete('/', (request, response)=> {
    response.send('POST - Hello JS!');
})

app.get('/a', (request, response)=> {
    response.send('Hello JSa!');
})

// app.post('/', function (req, res) {
//     res.send('POST request to the homepage');
//   });

app.listen('8080');


let user = {
    name: "user Node",
    technology: "node.js",
    isAdmin: true
}

let userJSON = JSON.stringify(user);
//console.log(userJSON);