// Fetch API Call Example
// The Fetch API provides an interface to connect to the network and fetch resources form the network. If you have use XMLHTTPRequest it is similar to that but new API provides more powerful and cleaner interface and feature set.

// Updated Node to 17.5 to use fetch
// Installed node-fetch

// Required node-fetch
const fetch = require('node-fetch');

fetch('https://rapidapi.com/guides/api/rest')
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => {
        console.log('error occured', err);
    });

//async/await
// async and await syntax allows us to chain promises more easily and cleanly.

// (async () => {
//     const response = await fetch('https://rapidapi.com/guides/api/rest');
//     const body = await response.json();
//     console.log(body);
// })();
