// HTTP API Call Example
// The Hypertext Transfer Protocol (HTTP) is designed to enable communications between clients and servers. HTTP works as a request-response protocol between a client and server. Example: A client (browser) sends an HTTP request to the server; then the server returns a response to the client.

// Import http
const https = require('https');

https
    .get('https://rapidapi.com/guides/api/rest', (resp) => {
        let data = '';

        // A chunk of data has been received.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received.
        resp.on('end', () => {
            try {
                // Parse the data to JSON
                const jsonData = JSON.parse(data);
                console.log(jsonData);
            } catch (error) {
                console.log('Error parsing JSON:', error.message);
            }
        });
    })
    // Handle errors
    .on('error', (err) => {
        console.log('Error: ' + err.message);
    });
