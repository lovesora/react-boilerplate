const fs = require('fs');
const path = require('path');

let dir = path.resolve(__dirname, '../controllers');
console.log("controller path: " + dir);

function addMapping(router, mapping) {
    for (let url in mapping) {
        if (url.startsWith('GET ')) {
            // 如果url类似"GET xxx":
            let path = url.substring(4);
            router.get(path, mapping[url]);
            console.log(`register URL mapping: GET ${path}`);
        } else if (url.startsWith('POST ')) {
            // 如果url类似"POST xxx":
            let path = url.substring(5);
            router.post(path, mapping[url]);
            console.log(`register URL mapping: POST ${path}`);
        } else if (url.startsWith('PUT ')) {
            // 如果url类似"PUT xxx":
            let path = url.substring(4);
            router.put(path, mapping[url]);
            console.log(`register URL mapping: PUT ${path}`);
        } else if (url.startsWith('DELETE ')) {
            // 如果url类似"DELETE xxx":
            let path = url.substring(7);
            router.delete(path, mapping[url]);
            console.log(`register URL mapping: DELETE ${path}`);
        } else {
            // 无效的URL:
            console.log(`invalid URL: ${url}`);
        }
    }
}

function addControllers(router, ctlPath) {
    // 这里可以用sync是因为启动时只运行一次，不存在性能问题:
    let files = fs.readdirSync(ctlPath);

    files.forEach(function (file) {
        if (file != '.' && file != '..') {
            let filePath = ctlPath + '/' + file;
            fs.stat(filePath, function (err, stats) {
                if (err) throw err;
    
                if (stats.isDirectory()) {
                    addControllers(router, filePath);
                }
            });
        }
    });

    // 过滤出.js文件:
    let jsFiles = files.filter((f) => f.endsWith('.js'));
    for (let f of jsFiles) {
        console.log(`process controller: ${f}...`);
        let mapping = require(path.resolve(ctlPath, f));
        addMapping(router, mapping);
    }
    console.log(`process controller ending...`);
}

module.exports = function () {
    // 注意require('koa-router')返回的是函数:
    let router = require('koa-router')();
    addControllers(router, dir);
    return router.routes();
};