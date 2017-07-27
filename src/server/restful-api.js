let host = 'http://localhost:3000';

export default {
    host: host,
    user: {
        checkUsername: {
            type: 'GET',
            url: host + '/user/check/username'
        },
        signup: {
            type: 'POST',
            url: host + '/user'
        },
        login: {
            type: 'GET',
            url: host + '/user'
        },
        updateInfo: {
            type: 'PUT',
            url: host + '/user'
        },
        updateHeadImg: {
            type: 'PUT',
            url: host + '/headImg'
        }
    }
}
