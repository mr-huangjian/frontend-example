import myaxios from "./myaxios.js";

myaxios.interceptors.request.use(function (config) {
    console.log('request success1', config);
    return { ...config, step1: true };
}, function (error) {
    console.log('request failure1', error);
    return { ...error, step1: false };
});

myaxios.interceptors.request.use(function (config) {
    console.log('request success2', config);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ ...config, step2: true })
        }, 2000);
    })
}, function (error) {
    console.log('request failure2', error);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({ ...error, step2: true })
        }, 2000);
    })
});

myaxios.interceptors.response.use(function (response) {
    console.log('response success1', response);
    return Promise.reject({ ...response, step1: true });
}, function (error) {
    console.log('response failure1', error);
    // return Promise.reject({ ...error, step1: false });

    // 拦截中止，不会继续传递到后面的拦截器，最终的then/catch也不会执行
    // return new Promise(() => { });

    // 拦截中断，不会继续传递到后面的拦截器，最终的then/catch会执行
    return Promise.reject({ ...error, step1: false });
});

myaxios.interceptors.response.use(function (response) {
    console.log('response success2', response);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ ...response, step2: true })
        }, 2000);
    })
}, function (error) {
    console.log('response failure2', error);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({ ...error, step2: false })
        }, 2000);
    })
});

myaxios.request({ uname: 'hj' }).then(res => {
    console.log('final-data', res);
}).catch(err => {
    console.log('final-err', err);
})
