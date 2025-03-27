
- Что такое this
- Описание всех неожиданных кейсов использования this (не меньше шести)
- Задачи на каждые кейсы неожиданного использования


### ⭐Что такое this

В JavaScript ключевое слово `this` ссылается на **контекст выполнения** функции — то есть, на объект, в контексте которого была вызвана функция. Его значение зависит от **способа вызова функции**, а не от места, где она была объявлена.

**Точное определение:**
`this` — это ключевое слово, которое указывает на объект, в контексте которого выполняется текущий код. Значение `this` определяется во время вызова функции и может изменяться в зависимости от режима (обычный, strict, arrow-функция) и способа вызова.

📌Контекст выполнения (`this`)
- Контекст создаётся **в момент вызова функции**.
- Зависит от **способа вызова** (например, `obj.method()`, `fn.call(obj)`, стрелка и т.д.)
- Контекст — **динамический**

📌Лексическое окружение (Lexical Environment)
**Лексическое окружение** — это внутренняя структура, которая содержит переменные, доступные **в данной области видимости во время объявления функции**.

- Определяется **в момент объявления функции**
- Содержит: переменные, параметры, ссылки на внешние окружения
- Используется для замыканий, стрелочных функций и `var`/`let`/`const`
- Лексическое = "по тексту кода", статическое

Разница:

| Параметр                     | Контекст (`this`)            | Лексическое окружение        |
| ---------------------------- | ---------------------------- | ---------------------------- |
| Когда определяется           | **Во время вызова**          | **Во время объявления**      |
| Что определяет               | Что такое `this`             | Какие переменные доступны    |
| Можно ли изменить            | Да (`call`, `apply`, `bind`) | Нет (только через замыкание) |
| Статический или динамический | **Динамический**             | **Статический**              |
| От чего зависит              | Способ вызова функции        | Где в коде написана функция  |
| Используется в               | Методы, классы, контексты    | Замыкания, `var/let/const`   |

- `this` = **контекст вызова** (динамика)
- Лексическое окружение = **пространство переменных** (статика)

### ⭐Основные кейсы использования this

#### 📌Обычная функция:
- В нестрогом режиме (`non-strict`) — `this` ссылается на глобальный объект (`window` в браузере).
- В строгом режиме (`'use strict'`) — `this` будет `undefined`.
``` js
function show() {
  console.log(this);
}
show(); // window (или undefined в strict)
```

#### 📌Метод объекта:
- `this` ссылается на объект, перед точкой:
``` js
const obj = {
  name: 'JS',
  show() {
    console.log(this.name);
  }
};
obj.show(); // 'JS'
```

#### 📌Arrow-функция:
- **Не имеет своего `this`**, а берёт его из внешнего (лексического) контекста:
``` js
const obj = {
  name: 'JS',
  show: () => {
    console.log(this.name);
  }
};
obj.show(); // undefined (this взят из внешнего контекста, например, window)
```

#### 📌Конструктор (через `new`):
- `this` ссылается на создаваемый объект:
``` js
function Person(name) {
  this.name = name;
}
const user = new Person('Alice');
console.log(user.name); // 'Alice'
```

#### 📌call, apply, bind — явное указание `this`:
``` js
function logName() {
  console.log(`Имя: ${this.name}`);
}

const user1 = { name: 'Артем' };
const user2 = { name: 'Ирина' };

logName.call(user1); // Имя: Артем
logName.call(user2); // Имя: Ирина
```


### ⭐Неожиданные кейсы использования this


#### 📌`this` внутри DOM-обработчика события
Неожиданность: `this` в обработчике указывает на **элемент**, на котором произошло событие.
``` html
<button id="btn">Нажми меня</button>
<script>
  document.getElementById('btn').addEventListener('click', function () {
    this.style.backgroundColor = 'tomato'; // this = button!
  });
</script>
```
**Реальный кейс**: Изменение внешнего вида элемента по клику, ховеру и т.д.

**Подводный камень**: если использовать стрелочную функцию — `this` уже будет не элемент, а внешний контекст (`window` или объект, если внутри класса).

#### 📌Скрытый `this` при использовании классов с event listeners
Неожиданность: внутри обработчика `this` ≠ экземпляру класса, если не связать явно.
``` js
class Button {
  constructor(text) {
    this.text = text;
    document.body.innerHTML += `<button>${text}</button>`;
    document.querySelector('button').addEventListener('click', this.handleClick);
  }

  handleClick() {
    console.log(this.text); // undefined! this = button
  }
}

new Button('Нажми меня');
```
Решение — `bind(this)` или arrow-функция:
``` js
document.querySelector('button').addEventListener('click', this.handleClick.bind(this));
```

#### 📌`this` в классе внутри `setTimeout`
Неожиданность: методы класса теряют `this` в асинхронных вызовах:
``` js
class Timer {
  constructor() {
    this.seconds = 0;
  }

  start() {
    setInterval(function () {
      this.seconds++;
      console.log(this.seconds); // NaN или ошибка!
    }, 1000);
  }
}
```

Решение:
``` js
setInterval(() => {
  this.seconds++;
  console.log(this.seconds);
}, 1000);
```

#### 📌`this` в `Object.defineProperty` геттере
Неожиданность: `this` в геттерах/сеттерах указывает на сам объект, **даже если вызван через другой контекст**:
``` js
const user = {
  firstName: 'Иван',
  lastName: 'Петров',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log(user.fullName); // Иван Петров
```
**Фишка**: можно выносить геттеры в `prototype` или `Object.defineProperty` и получать динамические значения через `this`.

#### 📌`this` в `map` с коллбэком (с `thisArg`)
Неожиданность: `Array.prototype.map` может использовать второй аргумент — контекст `this`.
``` js
const multiplier = {
  factor: 2,
  multiply(numbers) {
    return numbers.map(function (n) {
      return n * this.factor;
    }, this); // <-- второй аргумент задаёт `this`
  }
};

console.log(multiplier.multiply([1, 2, 3])); // [2, 4, 6]
```


#### 📌`this` в геттере у прототипа — зависит от вызывающего объекта
``` js
const animal = {
  get type() {
    return this.kind.toUpperCase();
  }
};

const dog = {
  __proto__: animal,
  kind: 'собака'
};

console.log(dog.type); // СОБАКА
```
`this` в геттере `animal.type` указывает на `dog`, потому что вызов идёт через `dog`.


#### 📌`this` в `Function.prototype.call` внутри `reduce`
Можно динамически менять `this` внутри редуктора:
``` JS
const ctx = { factor: 10 };

const numbers = [1, 2, 3];

const sum = numbers.reduce(function (acc, val) {
  return acc + val * this.factor;
}.bind(ctx), 0); // bind'им контекст

console.log(sum); // 60
```
Не очевидно, но даёт гибкость для "мультиконтекстных" операций.

#### 📌`this` в `Proxy` — ловушка `get` и обманка
Прокси может подменять `this`, если неаккуратно обращаться:
``` js
const user = {
  name: 'Вася',
  greet() {
    return `Привет, я ${this.name}`;
  }
};

const proxy = new Proxy(user, {
  get(target, prop, receiver) {
    const value = Reflect.get(target, prop, receiver);
    return typeof value === 'function' ? value.bind(target) : value;
  }
});

console.log(proxy.greet()); // Привет, я Вася
```
Без `.bind(target)`, `this` может указывать на `proxy`, а не `user`. Это может поломать методы, особенно если ты мутант, который переопределяет прототипы.

#### 📌`this` в `eval()` (и разница между strict и non-strict)
`eval` может обращаться к переменным в глобальном или локальном контексте, и `this` там ведёт себя по-разному:
``` js
(function () {
  console.log(eval('this')); // window (в обычном режиме)
})();

(function () {
  'use strict';
  console.log(eval('this')); // undefined (в strict)
})();
```

#### 📌`this` в генераторе — подвох!
Генераторы не работают с `this` напрямую как методы, если ты передаёшь их извне:
``` js
function* gen() {
  console.log(this); // undefined (в strict), window (без strict)
}

const obj = {
  *gen() {
    console.log(this); // obj
  }
};

obj.gen().next(); // this = obj
```
Используй генераторы как методы — иначе теряешь `this`, как с обычной функцией.

#### 📌`this` в геттере + прототип + `Object.create`
``` js
const base = {
  name: 'База',
  get display() {
    return `Имя: ${this.name}`;
  }
};

const derived = Object.create(base);
derived.name = 'Наследник';

console.log(derived.display); // Имя: Наследник
```
Хотя геттер определён в `base`, `this` = `derived`! Потому что вызов идёт от него.

#### 📌this в `setTimeout` внутри `Promise` — контекст улетает
``` js
const obj = {
  name: 'Test',
  delayLog() {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve(this.name); // undefined!
      }, 100);
    });
  }
};

obj.delayLog().then(console.log);
```
фикс:
``` js
setTimeout(() => resolve(this.name), 100);
```

#### 📌this и eval()
``` js
function test() {
  return eval('this');
}

console.log(test()); // ❓
```
Ответ: глобальный объект, а если стриктмод - то undefined


### ⭐Задачи



#### 📌 Задача 1 - array.map()
``` js
const multiplier = {
  factor: 2,
  multiply(numbers) {
    return numbers.map(function (n) {
      return n * this.factor;
    });
  }
};

console.log(multiplier.multiply([1, 2, 3])); // ❓
```
**Ответ**: `[ NaN, NaN, NaN ]`

**Решение:**
Передать в map контекст, вторым аргументом
``` js
const multiplier = {
  factor: 2,
  multiply(numbers) {
    return numbers.map(function (n) {
      return n * this.factor;
    }, this);
  }
};

console.log(multiplier.multiply([1, 2, 3])); // ❓
```

#### 📌Задача 2 - Метод в цепочке
``` js
const a = {
  name: 'А',
  getName() {
    return this.name;
  }
};

const b = {
  name: 'Б',
  a: a,
  getName: a.getName
};

console.log(b.a.getName());     // ❓
console.log(b.getName());       // ❓
```
**Ответ**:
- `b.a.getName()` → `'А'`
- `b.getName()` → `'Б'`

**Пояснение**:
- В `b.a.getName()` → `this` = `b.a` = `a`, у него `name = 'А'`
- В `b.getName()` → `this` = `b`, у него `name = 'Б'`
- `this` зависит **не от объекта, где метод был определён**, а от **того, как он вызван**!


#### 📌Задача 3 - `this` в `Object.defineProperty` c `getter` и `setter`
``` js
const user = {
  firstName: 'Анна',
  lastName: 'Иванова'
};

Object.defineProperty(user, 'fullName', {
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  set(value) {
    [this.firstName, this.lastName] = value.split(' ');
  }
});

user.fullName = 'Мария Смирнова';
console.log(user.firstName); // ❓
console.log(user.lastName);  // ❓
console.log(user.fullName);  // ❓
```
**Ответ**:
- `user.firstName` → `'Мария'`
- `user.lastName` → `'Смирнова'`
- `user.fullName` → `'Мария Смирнова'`

**Пояснение**:
- Внутри `getter` и `setter`, `this` указывает на сам объект `user`.
- Всё работает, как в магии


#### 📌Задача 4 - `this` внутри `setTimeout`, завернутый в async/await ловушку
``` js
const obj = {
  value: 'контекст',
  async start() {
    await new Promise(resolve => {
      setTimeout(function () {
        console.log(this.value); // ❓
        resolve();
      }, 100);
    });
  }
};

obj.start();
```
**Ответ**: `undefined`

**Пояснение**:
- `setTimeout(function () { ... })` — обычная функция → `this = window` (или `undefined` в strict)
- Даже несмотря на `async`, таймер не "наследует" контекст
- `this.value` → `undefined`

Фикс: заменить на стрелку:
``` js
setTimeout(() => {
  console.log(this.value);
}, 100);
```


#### 📌Задача 5 - **Класс + `super` + потеря `this`**
``` js
class Parent {
  constructor() {
    this.role = 'Родитель';
  }

  whoAmI() {
    return this.role;
  }
}

class Child extends Parent {
  constructor() {
    super();
    this.role = 'Чилдренz';
  }

  getIdentity() {
    const fn = super.whoAmI;
    return fn(); // ❓
  }
}

const c = new Child();
console.log(c.getIdentity());
```
**Ответ**: `undefined`
**Пояснение**:
- `super.whoAmI` возвращает **метод без привязки к экземпляру**
- `fn()` вызывается без контекста → `this` = `undefined`
- Даже несмотря на то, что это `super`, он не "помнит" `this`, если выдрать метод

Работает так:
``` js
return super.whoAmI.call(this); // теперь будет "Чилдренz"
```


#### 📌Задача 6 - `this` внутри функции, возвращённой функцией
``` js
function outer() {
  return function inner() {
    return this;
  };
}

const obj = {
  method: outer()
};

console.log(obj.method()); // ❓
```
**Ответ**: `obj`
**Пояснение**:
- `outer()` возвращает обычную функцию `inner`
- Она сохраняется как `obj.method`
- Вызов `obj.method()` — обычный вызов метода → `this = obj`

> 💡 Не важно, где функция родилась. Важно, как она вызвана.


#### 📌Задача 7 - `this` в Proxy + bind ловушка
``` js
const original = {
  name: 'Оригинал',
  sayHi() {
    return `Привет от ${this.name}`;
  }
};

const proxy = new Proxy(original, {
  get(target, prop, receiver) {
    const value = Reflect.get(target, prop, receiver);
    if (typeof value === 'function') {
      return value.bind(receiver); // намеренно меняем `this` на proxy
    }
    return value;
  }
});

console.log(proxy.sayHi()); // ❓
```
**Ответ**: `Привет от undefined`
**Пояснение**:
- `receiver` в Proxy — это сам `proxy`, не `target`
- У `proxy` нет `name`, поэтому `this.name` = `undefined`
- Метод `sayHi` привязывается к `proxy`, а не к `original`
Если бы в proxy было `name: 'Прокси'`, то вернуло бы его

#### 📌Задача 8 - `this` в `async/await` + `.bind()`
``` js
const obj = {
  value: 42,
  async method() {
    const inner = function () {
      return this.value;
    }.bind(this);

    return await Promise.resolve(inner());
  }
};

obj.method().then(console.log); // ❓
```
**Ответ**: `42`
**Пояснение**:
- `async`/`await` **не меняют** `this`, всё работает как в обычной функции
- Мы явно `bind(this)` — значит `inner` всегда будет вызываться с `this = obj`
- `await` не ломает `this`, потому что `inner` уже привязан
Самое важное: `bind` работает, даже если вызов происходит **после await'а**

#### 📌Задача 9 -Теряем `this` в then-цепочке
``` js
const obj = {
  value: 100,
  getValue() {
    return this.value;
  },
  async start() {
    return Promise.resolve(this.getValue);
  }
};

obj.start().then(fn => {
  console.log(fn()); // ❓
});
```
**Ответ**: `undefined`
**Пояснение**
- `this.getValue` возвращает **метод**, но **не вызывает его**
- Внутри `.then(fn => fn())` — это обычный вызов функции
- `this` потерян! Значит `this.value` → `undefined`
Чтоб заработало:
``` js
return Promise.resolve(this.getValue.bind(this));
```

#### 📌Задача 10 - Класс с динамически добавленным методом
``` js
class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

Calculator.prototype.sum = function () {
  return this.a + this.b;
};

const calc = new Calculator(2, 3);
const fn = calc.sum;
console.log(fn()); // ❓
```
**Ответ**: `NaN`
**Пояснение**:
- `fn()` вызывается без объекта — `this = undefined`
- `this.a` и `this.b` → `undefined + undefined` = `NaN`


### ⭐Чек-лист по this 

Каждый раз, когда видишь `this`, спрашивай: **КАК вызвана функция, а не ГДЕ она написана?**


#### 📌ФУНКЦИЯ ВЫЗЫВАЕТСЯ КАК МЕТОД ОБЪЕКТА?
``` js
obj.method()
```
`this` → `obj`

#### 📌ФУНКЦИЯ ВЫЗЫВАЕТСЯ ПРОСТО КАК `fn()`?
``` js
fn()
```
`this`:
- `undefined` в strict-режиме
- `window` (в браузере) в нестрогом

#### 📌СТРЕЛОЧНАЯ ФУНКЦИЯ?
``` js
const arrow = () => this
```
`this` берётся из внешнего (лексического) контекста → нельзя переопределить через `.call`, `.bind`, `.apply`

#### 📌ФУНКЦИЯ БЫЛА ПЕРЕДАНА, НО НЕ ВЫЗВАНА В КОНТЕКСТЕ?
``` js
const fn = obj.method;
fn(); // Потерян контекст
```
 `this` теряется
 Фикс: `.bind(obj)` или стрелочная обёртк

#### 📌КЛАСС И `this` ВНУТРИ МЕТОДА?
``` js
class A {
  method() {
    console.log(this); // экземпляр класса
  }
}
```
`this` указывает на экземпляр
Но если передать метод — `this` теряется!

#### 📌КОНСТРУКТОР (`new`)
``` js
function Person() {
  this.name = 'Lidia';
}

const p = new Person();
```
`this` указывает на **создаваемый объект**

#### 📌ВНУТРИ `setTimeout` / `setInterval`?
``` js
setTimeout(function () {
  console.log(this); // window / undefined
}, 1000);
```
`this` теряется
Используй стрелочную функцию: `setTimeout(() => { ... })`

#### 📌`call`, `apply`, `bind`
``` js
fn.call(obj)
fn.apply(obj)
fn.bind(obj)
```
Принудительно устанавливают `this`
`bind()` возвращает новую функцию, не вызывает



#### 📌`this` ВНУТРИ ГЕТТЕРА / СЕТТЕРА
``` js
get fullName() {
  return `${this.name} ${this.surname}`;
}
```
`this` = объект, у которого вызвали геттер/сеттер

#### 📌`this` В ПРОКСИ (`receiver` в Reflect)
```js
Reflect.get(target, prop, receiver)
```
Можно переопределить `this` внутри геттера с помощью `receiver`

#### 📌`this` в ESM и CommonJS
| Среда | Вне функции `this` =  |
| ----- | --------------------- |
| ESM   | `undefined`           |
| CJS   | `{}` (module.exports) |

#### 📌`this` в классе + `super`
- При вызове `super.method()` — `this` сохраняется
- При выносе `const m = super.method` → теряется `this`

#### 📌`this` в `map`, `forEach`, `filter`
``` js
arr.map(function(x) { return this.value + x }, this);
```
Указывай `thisArg` вторым параметром, иначе `this = undefined`

#### 📌`this` в `eval()`
- В нестрогом режиме → `this = window`
- В strict → `this = undefined`

#### 📌Красный флаг: Где `this` часто ведёт себя НЕОЖИДАННО
| Сценарий                                  | Поведение         |
| ----------------------------------------- | ----------------- |
| Функция оторвана от объекта               | `this` потерян    |
| Стрелка внутри метода                     | `this` = внешний  |
| Метод передан как `callback`              | `this` потерян    |
| Геттер вызывается через прокси            | `this = receiver` |
| `this` после `await` в обычной функции    | сохраняется       |
| `this` в классе при `bind` в конструкторе | сохраняется       |

#### 📌Как избежать проблем с `this`
- Используй стрелки для вложенных функций
- Используй `bind()` при передаче методов
- Не забывай про `thisArg` во встроенных методах (`map`, `forEach`)
- Следи за контекстом при деструктуризации методов
- Всегда знай: **КАК ты вызываешь функцию?**
