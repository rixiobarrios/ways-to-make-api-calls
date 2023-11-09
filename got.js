// Got API Call Example

// Import 'got'
import got from 'got';

const getData = async () => {
    try {
        const res = await got
            .get('https://rapidapi.com/guides/api/rest')
            .json();
        console.log(res);
    } catch (err) {
        console.log(err);
    }
};
