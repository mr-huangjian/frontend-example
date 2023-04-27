/**
 * 传入需要测试的 Promise 对象，将对应结果返回
 * @param promise 需要测试的 Promise 对象
 * @return {Promise<string>}
 */
const GetPromiseState = promise => {
    const target = {}
    return Promise.race([promise, target]).then(
        value => (value === target) ? 'pending' : 'fulfilled',
        () => 'rejected',
    )
}

Promise.prototype.getState = () => {
    console.log('--getState--');
    const target = {}
    return Promise.race([this, target]).then(
        value => (value === target) ? 'pending' : 'fulfilled',
        () => 'rejected',
    )
}

// 测试代码
let a = Promise.resolve();
let b = Promise.reject();
let c = new Promise(() => { });

GetPromiseState(a).then(state => console.log(state)); // fulfilled
GetPromiseState(b).then(state => console.log(state)); // rejected
GetPromiseState(c).then(state => console.log(state)); // pending

// // console.log(a.getState().then(console.log)); // fulfilled

// a.getState()