// что произойдет ?

console.log(1)

const a = new Promise((res, rej) => {
  rej(4);
  console.log(5);
  res(console.log(6));
})

setTimeout(console.log(9), 1)
setTimeout(console.log(3), 0)

a.then((data) => console.log(data))
  .catch(console.log)
  .then((data) => console.log(data))
  .finally((data) => console.log(data))
  .then((data) => console.log(data))

console.log(2)

// Решение/Ответ: 






