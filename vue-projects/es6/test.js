function test() {
  return new Promise((resolve, reject) => {
    resolve()
  }).then((res) => {
    return Promise.resolve(666)
  })
}

test().then((res) => {
  console.log('res', res);
}).catch((err) => {
  console.log('err', err);
})

const obj = {
  a: 1,
  b: 2,
  c: Object.freeze({
    name: 'hj'
  }),
  d: {
    name: 'hj2'
  }
}

let { a, b, c, d } = obj
a = 10
console.log(obj)
console.log('freeze', Object.isExtensible(c))
console.log('freeze2', Object.isExtensible(d))

obj.a = 100
console.log(obj)


function test2(data) {
  data.b = 20000
}

test2(obj)
console.log(obj)