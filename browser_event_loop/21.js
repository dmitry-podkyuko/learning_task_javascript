// Что будет в консоли

const promise = new Promise((resolve, reject) => {
  a += 3;
  console.log(a);
  resolve(a);
})
  .catch((e) => a)

setTimeout(() => {
  console.log(++a)
})

promise.then(value => {
  result = value + 5
  console.log(result)
  return result
})

let a = 1