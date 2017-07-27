const Koa = require('koa');
const app = new Koa();


const bodyParser = require('koa-bodyparser');
app.use(bodyParser());


const cors = require('koa-cors');
app.use(cors());


// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}\n`);
    await next();
});


const controller = require('./configs/controllers.config.js');
app.use(controller());


app.listen(3000);

console.log('app started at port 3000');
