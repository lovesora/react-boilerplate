export default class Fetch {
    constructor (headers) {
        this.headers = new Headers({...{
            // 跨域
            'credentials': 'include',
            // 添加cookie
            'credentials': 'same-origin',
            'Content-Type': 'application/json',
        }, ...headers});
    }


    /**
     * 
     * fetch json数据
     * @param {object : {method, url}} api 
     * @param {object} data 
     * @param {object} headers 
     */
    static fetch (api, data, headers) {
        let _this = new Fetch(headers);

        switch (api.method.toLowerCase()) {
            case 'get': {
                return _this.getJSON(api.url);
            }
            case 'post': {
                return _this.postJSON(api.url, data);
            }
            case 'put': {
                return _this.putJSON(api.url, data);
            }
            case 'delete': {
                return _this.deleteJSON(api.url, data);
            }
        }
    }


    /**
     * 非200系列抛出异常
     */
    checkStatus (response) {
        if (response.status >= 200 && response.status < 300) {
            return response
        } 

        throw `${response.status} ${response.statusText}`;
    }


    /**
     * 返回json数据
     */
    parseJSON (response) {
        return response.json()
    }
    

    /**
     * 获取json数据
     * @param {string} url 
     */
    getJSON (url) {
        return fetch(url, {
            headers: this.headers
        })
            .then(this.checkStatus)
            .then(this.parseJSON);
    }


    /**
     * post json数据
     * @param {string} url
     * @param {object} json 
     */
    postJSON (url, json) {
        return fetch(url, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify(json)
            })
            .then(this.checkStatus)
            .then(this.parseJSON);
    }


    /**
     * put json数据
     * @param {string} url
     * @param {object} json 
     */
    putJSON (url, json) {
        return fetch(url, {
                method: 'PUT',
                headers: this.headers,
                body: JSON.stringify(json)
            })
            .then(this.checkStatus)
            .then(this.parseJSON);
    }


    /**
     * delete json数据
     * @param {string} url
     * @param {object} json 
     */
    deleteJSON (url, json) {
        return fetch(url, {
                method: 'DELETE',
                headers: this.headers,
                body: JSON.stringify(json)
            })
            .then(this.checkStatus)
            .then(this.parseJSON);
    }


    /**
     * 获取html文本
     * @param {string} url 
     */
    getHtml (url) {
        return fetch(url, {
            headers: this.headers
        })
            .then(this.checkStatus)
            .then(response => response.text());
    }


    /**
     * post表单数据
     * @param {string} url 
     * @param {DOM} form 
     */
    postFormData (url, form = document.querySelector('form')) {
        return fetch(url, {
            method: 'POST',
            headers: this.headers,
            body: new FormData(form)
        })
            .then(this.checkStatus)
            .then(this.parseJSON);
    }


    /**
     * 文件上传
     * @param {string} url 
     * @param {DOM} input 
     */
    postFile (url = '/avatars', input = document.querySelector('input[type="file"]')) {
        let data = new FormData()
        data.append('file', input.files[0]);

        return fetch(url, {
                method: 'POST',
                headers: this.headers,
                body: data
            })
            .then(this.checkStatus)
            .then(this.parseJSON);
    }
}