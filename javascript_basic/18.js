var foo3 = 1;

(function f22(foo3) {
  if (foo3) {
    console.log('pain');
    var foo3 = 2;
  }

  console.log(foo3);
})(foo3);