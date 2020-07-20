const https = require("https");
const place_holder_api = "https://jsonplaceholder.typicode.com/posts/1";
const rick_morty_api = 'https://rickandmortyapi.com/api/character/';
const star_wars = 'https://swapi.dev/api/people/'

function request(url) {
    https.get(url, res => {
        res.setEncoding("utf8");
        let body = "";
        res.on("data", data => {
            body += data;
        });
        res.on("end", () => {
            body = JSON.parse(body);
            console.log(body);
        });
    });
}

// request(place_holder_api);

// request(star_wars);

// npm i request

// const request = require("request");
// const url = "https://jsonplaceholder.typicode.com/posts/1";
// function peticion(url_api) {
//     request.get(url, (error, response, body) => {
//       let json = JSON.parse(body);
//       console.log(json);
//     });
// }

// // npm i node-fetch
// const fetch = require("node-fetch");
// const url = "https://jsonplaceholder.typicode.com/posts/1";

// const getData = async (url) => {
//   try {
//     const response = await fetch(url);
//     const json = await response.json();
//     console.log(json);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getData(url);

// // npm i axios

// const axios = require("axios");
// const url = "https://jsonplaceholder.typicode.com/posts/1";

// const getData = async url => {
//   try {
//     const response = await axios.get(url);
//     const data = response.data;
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getData(url);


function request2(url,callback) {
    https.get(url, res => {
        res.setEncoding("utf8");
        let body = "";
        if (res.statusCode === 200) {
            res.on("data", data => {
                body += data;
            });
            res.on("end", () => {
                body = JSON.parse(body);
                return callback(body)
            });
        }else{
            let error = newError('Error: ' + url);
            return callback(error)
        }
    });
}

function imprimeData(data) {
    console.log(data);
}

// request2(place_holder_api,imprimeData)


// let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// // direccion de la API
// let api = 'https://rickandmortyapi.com/api/character/';

// // funcion principal
function fetchData(url_api, callback) {
    // instanciamos la conexion
    let xhttp = new XMLHttpRequest();
    // abrir una conexion con el metodo, la ruta y si es asincrono
    xhttp.open('GET', url_api, true);
    // validacion del llamado
    xhttp.onreadystatechange = (event) => {
        // el state 4 es el ultimo de la peticion
        if (xhttp.readyState === 4) {
            // verificamos que el status este en 200, que dice que todo bien, no un 400 o 500
            if (xhttp.status === 200) {
                // el primer valor es el err, y el siguiente el resultado
                // ejecutamos el callback con el resultado
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                // si no es 200
                let error = newError('Error: ' + url_api);
                // matamos el proceso con un error
                return callback(error, null);
            }
        }
    }
    // por ultimo enviamos la peticion
    xhttp.send();
}
