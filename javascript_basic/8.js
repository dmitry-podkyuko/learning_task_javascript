// Что будет в косоли
function a() {
  function b() {
    var qwe123 = '123';
  }

  b();
  console.log('qwe123', qwe123);
}

a();