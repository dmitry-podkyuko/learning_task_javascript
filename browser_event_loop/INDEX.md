## №1 задание
Что будет выведено в консоль?
```javascript
setTimeout(() => alert("timeout"));

Promise.resolve()
  .then(() => alert("promise"));

alert("code");
```

## №2 задание
Что будет выведено в консоль?
```javascript
setTimeout(() => alert("timeout"));

Promise.resolve()
  .then(() => setTimeout(() => alert("promise")));

alert("code");
```
## №3 задание
Что будет выведено в консоль?
```javascript
setTimeout(function timeout() {
  console.log('Таймаут');
}, 0);

let p = new Promise(function (resolve, reject) {
  console.log('Создание промиса');
  resolve();
});

p.then(function () {
  console.log('Обработка промиса');
});

console.log('Конец скрипта');
```

## №4 задание
Что будет выведено в консоль?
```javascript
console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);
```
## №5 задание
Что будет выведено в консоль?
```javascript
Promise
  .resolve("1")
  .then(data => console.log(data))
  .then(data => {
    console.log(data);
    return "2";
  })
  .then(data => console.log(data))
```
## №6 задание
Что будет выведено в консоль?
```javascript
function great() {
  console.log('Pre greating');
  return 'Hello'
  console.log('Hellllllo there!')
}

function respond() {
  return setTimeout(() => {
    console.log('Pre respond')
    prompt('Hey!')
    console.log('HEYYYYYYY, you’re too slooow')
  }, 1000)
}

great()
respond()
```
## №7 задание
Что будет выведено в консоль?
```javascript
const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  setTimeout(bar, 0)
  baz()
}

foo()
```
## №8 задание
Что будет выведено в консоль?
```javascript
var a = 5;

setTimeout(function timeout() {
  console.log(a);
  a = 10;
}, 0);

var p = new Promise(function (resolve, reject) {
  console.log(a);
  a = 25;
  resolve();
});

p.then(function () {
  // some code
});

console.log(a);
```
## №9 задание
Что будет выведено в консоль?
```javascript
function foo() {
  setTimeout(foo, 0);
}

foo();
```
## №10 задание
Что будет выведено в консоль?
```javascript
function foo() {
  Promise.resolve().then(foo);
}

foo();
```
## №11 задание
Что будет выведено в консоль?
```javascript
setTimeout(() => console.log(3), 1);
setTimeout(() => console.log(1), 0);
setTimeout(() => console.log(2));
setTimeout(() => console.log(4));
```
## №12 задание
Что будет выведено в консоль?
```javascript
setTimeout(() => console.log(1), 10);
setTimeout(() => console.log(2));
setTimeout(() => console.log(3), 0);
setTimeout(() => console.log(4), 5);
```
## №13 задание
Что будет выведено в консоль?
```javascript
setTimeout(() => console.log(1), 5);
setTimeout(() => console.log(2));
setTimeout(() => console.log(3));
setTimeout(() => console.log(4), 5);
```
## №14 задание
Что будет выведено в консоль?
```javascript
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
```
## №15 задание
Что будет выведено в консоль?
```javascript
Promise
  .all([
    Promise.reject(1),
    Promise.resolve(2),
    Promise.reject(3),
    Promise.resolve(4),
  ])
  .then(data => console.log('data', data))
  .catch((error) => console.log('error', error))
```
## №15 задание
Что будет выведено в консоль?
```javascript
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
```
## №15 задание
Что будет выведено в консоль?
```javascript
async function f() {
  console.log('start')

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("готово!"), 1000)
  });

  let result = await promise;
  console.log('after await')

  console.log(result);
}

console.log('sync')

f();

console.log('sync END')
```
## №15 задание
Почему ошибка не обрабатывается блоком catch, как исправить ?
```javascript
const fetchData = async () => {
  await Promise.resolve().then(() => {
    throw new Error();
  });
};

try {
  (async () => {
    await fetchData(); // может вернуть ошибку, а может данные
  })();
} catch (error) {
  console.error('Error fetching data:', error);
}
```
## №15 задание
Что будет выведено в консоль?
```javascript
console.log(1)

requestIdleCallback(() => { console.log(6) })

setTimeout(() => { console.log(2) })

requestAnimationFrame(() => { console.log(3) })

queueMicrotask(() => console.log(4))

const p = new Promise((rs, rj) => {
  console.log(7)
  rs();
  console.log(20)
  rj();
})

p.then(() => console.log(8)).catch((er) => console.log(er))

queueMicrotask(() => console.log(10))

p.then(() => console.log(9))
  .finally(() => console.log(11))
  .then(() => console.log(12))


setTimeout(() => { console.log(5) }, 0)
```
## №15 задание
Что будет выведено в консоль?
```javascript
console.log(1)

const a = new Promise((res, rej) => {
  rej(4);
  console.log(5);
  res(console.log(6));
})

setTimeout(console.log(9), 1)
setTimeout(console.log(3), 0)

a.then((data) => console.log(data))
  .catch(console.log)
  .then((data) => console.log(data))
  .finally((data) => console.log(data))
  .then((data) => console.log(data))

console.log(2)
```
## №16 задание
Что будет выведено в консоль?
```javascript
const promise = new Promise((resolve, reject) => {
  a += 3;
  console.log(a);
  resolve(a);
})
  .catch((e) => a)

setTimeout(() => {
  console.log(++a)
})

promise.then(value => {
  result = value + 5
  console.log(result)
  return result
})

let a = 1
```
## №16 задание
Что будет выведено в консоль?
```javascript

```