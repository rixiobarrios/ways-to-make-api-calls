// FileFetch API Call Example
// This is an API call to fetch information from a local file.
// To do so you first need to install the file-fetch package using; npm install file-fetch the require file-fetch.

// Import file-fetch
const fileFetch = require('file-fetch');

fileFetch('./movies.json').then((res) => {
    res.body.pipe(process.stdout);
});
