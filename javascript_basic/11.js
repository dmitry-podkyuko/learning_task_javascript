// Что будет в консоли ? 

function foo() {
  var x = 10;
  var y = 20;

  return function () {
    console.log([x, y]);
  };
}

var x = 30;
var bar = foo();
bar();