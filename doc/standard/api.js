api = {
    feeder: {
        url: '',
        args: {
            fs: 'token'
        }
    }
}



// xxx.js

let argument = {
    fs: 'F-Session'
}


let data = {};
api.feeder.args.forEacn((v,k) => {
    data[v] = argument[k];
})

ajax.get(api.feeder.url, data);
