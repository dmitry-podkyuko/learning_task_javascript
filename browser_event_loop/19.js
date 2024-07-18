// что произойдет ?

console.log(1)

requestIdleCallback(() => { console.log(6) })

setTimeout(() => { console.log(2) })

requestAnimationFrame(() => { console.log(3) })

queueMicrotask(() => console.log(4))

const p = new Promise((rs, rj) => {
  console.log(7)
  rs();
  console.log(20)
  rj();
})

p.then(() => console.log(8)).catch((er) => console.log(er))

queueMicrotask(() => console.log(10))

p.then(() => console.log(9))
  .finally(() => console.log(11))
  .then(() => console.log(12))


setTimeout(() => { console.log(5) }, 0)

// Решение/Ответ: 






