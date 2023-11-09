// XMLHttpRequest API Call Example
// This is a built-in object in JavaScript that allows you to make asynchronous HTTP requests.

// Install node-xmlhttprequest using npm install node-xmlhttprequest

// Require node-xmlhttprequest
var XMLHttpRequest = require('node-xmlhttprequest').XMLHttpRequest;

function reqListener() {
    // JSON response
    console.log(JSON.parse(this.response));
}

const req = new XMLHttpRequest();
req.addEventListener('load', reqListener);
req.open('GET', 'https://rapidapi.com/guides/api/rest');
req.send();
