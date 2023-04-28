
export default class InterceptorManager {
    constructor() {
        this.handlers = [];
    }

    use(fulfilled, rejected) {
        this.handlers.push({
            fulfilled,
            rejected
        });
        return this.handlers.length - 1;
    }

    eject(id) {
        if (this.handlers[id]) {
            this.handlers[id] = null;
        }
    }

    forEach(fn, reverse) {
        (reverse ? this.handlers.reverse() : this.handlers).forEach(h => {
            if (h !== null) {
                fn(h);
            }
        });
    }

    // payload chain ok
    static transfer0(promise, chain) {
        while (chain.length) {
            promise = promise.then(chain.shift(), chain.shift());
        }
        return promise;
    }

    static transfer2(payload, chain) {
        let promise = Promise.resolve(payload);
        while (chain.length) {
            promise = promise.then(chain.shift(), chain.shift());
        }
        return promise;
    }

    /**
     * 如果继续下去，则调 resolve，否则调 reject
     * @param {*} payload 
     * @param {*} chain 
     * @returns 
     */
    static transfer(payload, chain) {
        return new Promise((resolve, reject) => {
            let promise = Promise.resolve(payload);
            let i = 0;

            function next(promise) {
                promise.then($ => {
                    return chain.unshift()($)
                }).catch($ => {
                    return chain.unshift()($)
                })
            }
            next(promise)
        })
    }

}