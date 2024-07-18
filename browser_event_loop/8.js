// что будет выведено в консоль?

var a = 5;

setTimeout(function timeout() {
  console.log(a);
  a = 10;
}, 0);

var p = new Promise(function (resolve, reject) {
  console.log(a);
  a = 25;
  resolve();
});

p.then(function () {
  // some code
});

console.log(a);

// Решение/Ответ: 






