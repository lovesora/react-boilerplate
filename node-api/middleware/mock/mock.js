class MockRoute {
    constructor () {
        this.router = require('koa-router')();
    }
    
    route (method, url, data) {
        switch (method.toLowerCase()) {
            case 'get': {
                this.router.get(url, async ctx => {
                    ctx.response.body = data;
                });
            }
            case 'post': {
                this.router.post(url, async ctx => {
                    ctx.response.body = data;
                });
            }
            case 'put': {
                this.router.put(url, async ctx => {
                    ctx.response.body = data;
                });
            }
            case 'delete': {
                this.router.delete(url, async ctx => {
                    ctx.response.body = data;
                });
            }
        }
        return this;
    }

    routes () {
        return this.router.routes();
    }
}

module.exports = () => new MockRoute();