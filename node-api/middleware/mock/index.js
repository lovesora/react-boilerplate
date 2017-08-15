let fs = require('fs');
let path = require('fs');


let mock = require('./mock')();

let homeMock = require('./home/index.mock');

mock.route('get', '/api/home/post/data', homeMock.postData)
    .route('post', '/api/home/post/post', homeMock.testPost);

module.exports = () => mock.routes();