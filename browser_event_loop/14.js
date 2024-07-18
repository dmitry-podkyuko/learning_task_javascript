// что будет выведено в консоль?

Promise
  .reject('1')
  .then((data) => {
    console.log('2:', data);
  })
  .catch((error) => {
    console.log('3:', error);
    return 3;
  })
  .then(data => {
    console.log('4:', data);
    return '4';

  })
  .then(data => {
    console.log('5:', data);
  })
  .catch((error) => {
    console.log('6:', error);
    return;
  })
  .finally((data) => {
    console.log('finally', data);
  })

// Решение/Ответ: 






