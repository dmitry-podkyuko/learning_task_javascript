// Что будет в консоли? 
let a = 1;
function foo() {
  if (!a) {
    var a = 10;
  }
  console.log(a)
}

function bar() {
  a = 10;
  return
  function a() { };
}

foo();
bar();
console.log(a);