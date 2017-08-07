let signup = async (ctx, next) => {
    let
        username    = ctx.request.body.username || '',
        email       = ctx.request.body.email || '',
        pw          = ctx.request.body.pw || '';

    try {
        let user = {signup: 'post signup'};
        ctx.response.body = {user};
    } catch (e) {
        ctx.response.body = {
            error: e.errors[0].message
        };
    }
}


let login = async (ctx, next) => {
    let
        username    = ctx.request.query.username || '',
        pw          = ctx.request.query.pw || '';

    try {
        let user = {login: 'get login'};
        ctx.response.body = {user};
    } catch (e) {
        ctx.response.body = {
            error: e.errors[0].message
        };
    }
}
module.exports = {
    'POST /user': signup,
    'GET /user': login
}
