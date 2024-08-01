
// Задача: 
// 1.Что будет выведено в консоль и почему?
// 2.Как это исправить? (без смены на let)

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  });
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => {
    console.log(j);
  });
}