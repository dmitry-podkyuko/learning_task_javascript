// что произойдет ?

function funcA() {
  let count = 10000000000;
  let value;
  console.time('timer');
  setTimeout(() => {
    if (!value) value = '1';
    console.log(`1 = ${value}`);
  }, 1000);

  while (count >= 0) {
    count -= 1;
  }

  console.timeEnd('timer');
  value = '2';
  console.log(`2 = ${value}`);
}

funcA();

// Решение/Ответ: 






