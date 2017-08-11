export default class FetchDemo {
    constructor () {
        this.headers = new Headers({
            // 跨域
            credentials: 'include',
            // 添加cookie
            credentials: 'same-origin'
        });
    }
    

    /**
     * 非200系列抛出异常
     */
    checkStatus (response) {
        if (response.status >= 200 && response.status < 300) {
            return response
        } 

        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }


    /**
     * 返回json数据
     */
    parseJSON (response) {
        return response.json()
    }
    
    
    /**
     * 获取html文本
     * @param {string} url 
     */
    getHtml (url = '/users.html') {
        return fetch(url, {
            headers: this.headers
        })
            .then(this.checkStatus)
            .then(response => response.text());
    }


    /**
     * 获取json数据
     * @param {string} url 
     */
    getJSON (url = '/users.json') {
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
    postJSON (url = '/users', json) {
        this.headers.append('Content-Type', 'application/json');
        return fetch(url, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify(json)
            })
            .then(this.checkStatus)
            .then(this.parseJSON);
    }


    /**
     * post表单数据
     * @param {string} url 
     * @param {DOM} form 
     */
    postFormData (url = '/users', form = document.querySelector('form')) {
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