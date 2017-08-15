/**
 * 1. 在正确信息的回调中使用throw进入错误信息捕获
 * 2. 在错误信息的回调中使用return进入正确信息捕获
 * 
 * success -> return -> success
 * success -> throw -> success
 * failure -> return -> success
 * failure -> throw -> failure
 */
new Promise(res => {
    setTimeout(() => {
        let r = 'res';
        console.log(r);//res
        res(r);
    }, 500);
}).then(r => {
    r = r + ' -> then';//res -> then
    console.log(r);
    return r;
}).then(r => {
    r = r + ' -> then';
    console.log(r);//res -> then -> then
    // throw 不会进入下一个then的第一个回调
    throw r;
}).then(r => {
    r = r + ' -> then';
    console.log(r);//不会执行
    return r;
}).then(()=>{}, rej => {
    rej = rej + ' -> rej';
    console.log(rej);//res -> then -> then -> rej
    // return 会进入下一个then的第一个回调
    return rej;
}).then(r => {
    r = r + ' -> then';//res -> then -> then -> rej -> then
    console.log(r);
    return r;
}, rej => {
    rej = rej + ' -> rej';
    console.log(rej);//不会执行
    return r;
}).catch(e => {
    e = e + ' -> catch';
    console.log(e);//不会执行
    return e;
}).then(r => {
    r = r + ' -> then';//res -> then -> then -> rej -> then -> then
    console.log(r);
    throw r;
}).catch(e => {
    e = e + ' -> catch';
    console.log(e);//res -> then -> then -> rej -> then -> then -> catch
    return e;
})