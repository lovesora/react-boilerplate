let Mock = require('mockjs');

let author = 'liuxin';
let postData = Mock.mock({
    'data|4-6': [{
        'status|+1': ['success', 'failure', 'error'],
        'id|+1': 1,
        'date': '@dateTime("yyyy-MM-dd A HH:mm:ss")',
        'title': '@cword(5, 10)',
        'author': '@cname()',
        'email': '@email()',
        'ip': '@ip()',
        'guid': '@guid()',
        'content': '@cparagraph(2,10)',
        'fn': function () {
            let data = `${author} ${this.id} : ${this.date}`;
            return data;
        },
        'reg': /liuxin[0-9]{3,5}\S{10}/,
    }],
});

let testPost = Mock.mock({
    'code|10-29': 3,
    'data|2': [{
        'id|+10': 1,
        'date': '@date',
        'content': '@paragraph'
    }]
});

module.exports = {
    postData,
    testPost,
};
