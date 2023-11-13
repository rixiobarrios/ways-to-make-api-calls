// Import path
const path = require('path');

// Import Express
const express = require('express');

// Import body-parser
const bodyParser = require('body-parser');

// Set it to app variable
const app = express();

// Format response in JSON
app.use(bodyParser.json());

// app.get() takes two parameters, the route path and function to call when the path is requested by the client
app.get('/', (req, res) => {
    // sendFile, which allows us to send any type of file as response
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Send data to REST server under path: localhost:5000/add
app.post('/add', (req, res) => {
    const { a, b } = req.body;
    res.send({
        result: parseInt(a) + parseInt(b),
    });
});

// Port number and log
app.listen(5000, () => {
    console.log(`Server is running on port 5000.`);
});
