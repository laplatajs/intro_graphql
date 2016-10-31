const fetch = require('node-fetch');

const url = 'http://localhost:4000/graphql';
const params = 'query={vehiculos{_id marca}}';

fetch(`${url}?${params}`)
    .then(function(response) {
        return response.json()
    }).then(function(json) {
        console.log('%j', json)
    }).catch(function(ex) {
        console.log('parsing failed', ex)
});
