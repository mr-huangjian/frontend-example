import InterceptorManager from "./InterceptorManager.js";

function dispatchRequest(config) {
    return new Promise((resolve, reject) => {
        console.log('dispatchRequest', config);
        setTimeout(() => {
            reject({ ok: true })
        }, 2000)
    })
}

class myaxios {
    interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager(),
    }

    request = (config) => {
        let chain = [dispatchRequest, undefined];
        let promise = Promise.resolve(config);

        this.interceptors.request.forEach(function (interceptor) {
            chain.unshift(interceptor.fulfilled, interceptor.rejected);
        }, true);

        this.interceptors.response.forEach(function (interceptor) {
            chain.push(interceptor.fulfilled, interceptor.rejected);
        });


        while (chain.length) {
            promise = promise.then(chain.shift(), chain.shift());
        }

        return promise;
    }

}

export default new myaxios()
