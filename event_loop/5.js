// Задача №5:

// что будет выведено в консоль?

Promise
  .resolve("1")
  .then(data => console.log(data))
  .then(data => {
    console.log(data);
    return "2";
  })
  .then(data => console.log(data))

// Решение/Ответ: 






