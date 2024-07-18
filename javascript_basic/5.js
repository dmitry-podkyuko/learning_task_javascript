
// Задача: Что будет выведено в консоль и почему?
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}

for (let j = 0; j < 3; j++) {
  setTimeout(function () {
    console.log(j);
  }, 100);
}