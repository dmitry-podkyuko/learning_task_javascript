// Задача №17:

// что произойдет ?

async function f() {
  console.log('start')

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("готово!"), 1000)
  });

  let result = await promise;
  console.log('after await')

  console.log(result);
}

console.log('sync')

f();

console.log('sync END')

// Решение/Ответ: 






