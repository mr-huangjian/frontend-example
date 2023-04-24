const fs = require('fs');

console.log(1);

fs.readFile('./data.txt', 'utf8', function (err, data) {
  console.log(2);
})

setTimeout(function () {
  console.log(3);
})

console.log(4);

// Output: 1 4 3 2