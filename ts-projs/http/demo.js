import InterceptorManager from "./InterceptorManager.js"

const interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager(),
}

interceptors.request.use(config => {
    console.log('request1')
    config.step1 = true
    return config
})

interceptors.request.use(config => {
    console.log('request2')
    config.step2 = true
    return config
})

interceptors.request.use(config => {
    console.log('request3')
    config.step3 = true
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(config)
        }, 2000)
    })
})

interceptors.response.use(response => {
    console.log('response1', response)
    response.step1 = true
    return response
}, error => {
    console.log('response1-error', error)
    error.error1 = true
    return Promise.reject(error)
})

interceptors.response.use(response => {
    console.log('response2', response)
    response.step2 = true
    return Promise.reject({ code: '10001' })
}, error => {
    console.log('response2-error', error)
    error.error2 = true
    return Promise.reject(error)
})

interceptors.response.use(response => {
    console.log('response3', response)
    response.step3 = true
    return response
}, error => {
    console.log('response3-error', error)
    error.error3 = true
    return Promise.reject(error)
})

async function run(config, interceptors) {
    let chain = [], promise = undefined

    chain = []
    interceptors.request.forEach($ => chain.push($.fulfilled, $.rejected))

    promise = Promise.resolve(config)

    while (chain.length) {
        promise = promise.then(chain.shift(), chain.shift())
    }

    let request = await promise

    console.log('REQUEST:', request)
    console.log('-----------------')

    // fetch
    // retry

    promise = Promise.resolve({ code: '0' })
    // promise = Promise.reject({ code: '-1000' })

    chain = []
    interceptors.response.forEach($ => chain.push($.fulfilled, $.rejected))

    promise = Promise.resolve(promise)

    while (chain.length) {
        promise = promise.then(chain.shift(), chain.shift())
    }

    return promise
}

run({ uname: 'hj' }, interceptors).then(data => {
    console.log('final-data:', data)
}, error => {
    console.log('final-error:', error)
})
