
const defaults = {
    name: 'hj',
    man: false,
    obj: {
        a: 1,
    },
    body: {
        uname: 'hj2',
        age: 18,
    }
}

const options = {
    name: 'huangjian',
    man: true,
    obj: Object.freeze({
        b: 2,
    })
}


function post(_url, _body, _options) {
    _options.body = _body

    const settings = merge(_options)
    console.log(settings)

    console.log(Object.isExtensible(settings.obj));
    console.log(Object.isExtensible(settings.body));
    console.log(Object.isExtensible(settings));
}


/**
 * 将默认配置与自定义配置进行合并：
 * 键值对的{值}
 *  如果是一个对象，那么就与默认值进行对象合并。
 *  如果是一个不可扩展的对象，那么就不进行合并，而是直接替换。
 *  如果不是对象，那么就直接替换。
 */

const getter = (value) => typeof value == 'function' ? value() : value

function merge(options) {
    for (const key in options) {
        const value = options[key]
        if (typeof value == 'object') {
            if (Object.isExtensible(value)) {
                options[key] = Object.assign({}, defaults[key], value)
            }
        }
    }
    return Object.assign({}, defaults, options)
}

// post('http://www.baidu.com', Object.freeze({ uname: 'hwyvip' }), options)

class HTTP {
    interceptors = {
        request: (request) => request,
        response: (response) => response,
        error: (error) => error,
    }

    async post() {
        let request = {}
        await this.interceptors.request(request)
        console.log('request', request)

        let done = { request }

        return fetch('http://www.baidu.com', {}).then((response) => {
            done.response = response

            if (response.ok) {
                return this.interceptors.response(done)

                // const data = await response.json() // parser = (response) => response.json()
                // done.data = data

                // if (data.code == 0) {
                //     return await this.interceptors.response(done)
                // } else {
                //     done.error = { status: data.code, statusText: data.msg, ok: true }
                //     throw await this.interceptors.response(done)
                // }
            } else {
                return this.interceptors.error(done)

                // done.error = { status: response.status, statusText: response.statusText, ok: false }
                // throw this.interceptors.response(done)
            }
        })
    }
}


const http = new HTTP()

http.interceptors.request = async (request) => {
    const { method, headers, body } = request

    request.headers = Object.isExtensible(headers) ? Object.assign({}, headers, {}) : headers
    request.body = Object.isExtensible(body) ? Object.assign({}, body, {}) : body

    request.key = 'value'
    // network request log & collect
    return request
}

http.interceptors.response = async ({ resquest, response }) => {
    const data = await response.json()
    const { code, msg, obj } = data

    // network response log & collect

    if (code == 0) {
        return Promise.resolve(obj)
    } else {
        const error = { status: code, statusText: msg, ok: true }
        return Promise.reject(error)
    }
}

http.interceptors.error = ({ resquest, response }) => {
    const { status, statusText } = response
    // network error log & collect

    const error = { status, statusText, ok: false }
    return Promise.reject(error)
}


http.post()

