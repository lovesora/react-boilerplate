let host = 'http://localhost:3000';


export default {
    host: host,
    user: {
        get: {
            type: 'GET',
            url: host + '/user'
        }
    }
}
