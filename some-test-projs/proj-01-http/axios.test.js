import axios from 'axios';

/**
 * axios v0.8.1
 * https://github.com/axios/axios/tree/v0.8.1
 */

axios.interceptors.request.use(function (config) {
    console.log('axios.interceptors.request.use.ok', config);
    return config;
}, function (error) {
    console.log('axios.interceptors.request.use.err', error);
    return Promise.reject(error);
})

axios.interceptors.response.use(function (response) {
    console.log('axios.interceptors.response.use.ok', response);
    return response;
}, function (error) {
    console.log('axios.interceptors.response.use.err', error);
    return Promise.reject(error);
})

axios.get('https://s1.9917.commm/version/HWY_cn_cn/client/sdk_ios/1/clientConf.json', {})
    .then(function (response) {
        console.log('axios.get.ok', response);
    }).catch(function (error) {
        console.log('axios.get.err', error);
    })
