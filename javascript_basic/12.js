// Что будет в консоли ? 

let qwe = { a: 'asd' };

function q(qwe) {
  qwe.a = 123;
}

function q2(qwe) {
  qwe = 123;
}

function q3() {
  qwe = 123;
}

console.log(qwe);
q(qwe);
console.log(qwe);
q2(qwe);
console.log(qwe);
q3();
console.log(qwe);