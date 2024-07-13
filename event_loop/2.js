// Задача №2:

// что будет выведено в консоль?

setTimeout(() => alert("timeout"));

Promise.resolve()
  .then(() => setTimeout(() => alert("promise")));

alert("code");

// Решение/Ответ: 






