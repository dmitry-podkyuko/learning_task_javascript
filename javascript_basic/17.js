function foo() {
  const x = 10;
  return {
    x: 20,
    bar: () => {
      console.log(this.x);
    },
    baz: function () {
      console.log(this.x);
    },
  };
}
const obj1 = foo();
obj1.bar(); // ?
obj1.baz(); // ?
const obj2 = foo.call({ x: 30 });
let y = obj2.bar;
let z = obj2.baz;
y(); // ?
z(); // ?
obj2.bar(); // ?
obj2.baz(); // ?