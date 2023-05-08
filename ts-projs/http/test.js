
Promise.resolve(Promise.reject(-1000))
  .then(data => {
    console.log('data:', data)
  })
  .catch(error => {
    console.log('error:', error)
  })