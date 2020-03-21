// const express = require('express');
// const app = express();

// app.get('/', (request, response)=> {
//     response.send(JSON.parse(userJSON));
// })

// app.post('/', (request, response)=> {

//     response.send(userJSON);
// })

// app.delete('/', (request, response)=> {
//     response.send('POST - Hello JS!');
// })

// app.get('/a', (request, response)=> {
//     response.send('Hello JSa!');
// })

// // app.post('/', function (req, res) {
// //     res.send('POST request to the homepage');
// //   });

// app.listen('8080');


// let user = {
//     name: "user Node",
//     technology: "node.js",
//     isAdmin: true
// }

// let userJSON = JSON.stringify(user);
// async function getData() {
//     let response = await fetch('/article/fetch/logo-fetch.svg');
//     let blob = await response.blob();
//     let img = document.createElement('img');
//     document.body.append(img);
//     img.src = URL.createObjectURL(blob);
    
//     setTimeout(()=> {
//     img.remove(); URL.revokeObjectURL(img.src);
//     }, 3000);

// }

const fetch = require('node-fetch');
async function getUserPr(names) {
    let users = [];

    for (let name of names) {
        let response = fetch(`https://api.github.com/users/${name}`).then(
            resolved => {
                if (resolved.status != 200) {
                    return null;
                } else {
                    return resolved.json();
                }
            },
            rejected => {
                return null;
            }
        );
        users.push(response);
        }
    let results = await Promise.all(users);    
    return(results);
    }
getUserPr(['afinika', 'sagero']).then(a=>console.log(a));

// async function getUser(names) {
//     for (let name of names) {
//         let response = await fetch(`https://api.github.com/users/${name}`);
//         if (response.status != 200) {
//             return }
//         let userName =  await response.json();
//         console.log(userName);
//     }
// }