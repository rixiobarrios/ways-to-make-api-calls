// Axios API Call Example
// Axios is a client HTTP API based on the XMLHttpRequest interface provided by browsers.

// Install the axios package 'npm install axios'

// Import axios
const axios = require('axios');

axios
    .get('https://rapidapi.com/guides/api/rest')
    .then((response) => {
        var data = response.data;
        // Process the response data here
        // Log the response data here
        console.log(data);
    })
    .catch((error) => console.error('Error:', error));
