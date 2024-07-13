// Задача №15:

// что произойдет ?

Promise
  .all([
    Promise.reject(1),
    Promise.resolve(2),
    Promise.reject(3),
    Promise.resolve(4),
  ])
  .then(data => console.log('data', data))
  .catch((error) => console.log('error', error))

// Решение/Ответ: 






