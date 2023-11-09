// NodeJS REST API Call Example
// For our first example we will look at two simple NodeJS scripts. Below is an example of a native NodeJS HTTP GET request. In your favorite text editor create a new file called rest.js and enter the following code:

const https = require('https');

const options = {
    method: 'GET',
    hostname: 'example.com',
    port: 443,
    path: '/api/v2/db/_table/contact_info',
    headers: {
        'x-dreamfactory-api-key': 'YOUR_API_KEY',
        'cache-control': 'no-cache',
    },
};

const req = https.request(options, function (res) {
    var chunks = [];

    res.on('data', function (chunk) {
        chunks.push(chunk);
    });

    res.on('end', function () {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });
});

req.end();
