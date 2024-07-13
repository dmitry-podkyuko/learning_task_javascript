// Задача №1:

// Напришите с каждым console.log() что будет выведено.
// Пример 
console.log(5 !== '5'); // false

// ------------------------
let b = false
let c = 2

const x = 0 || b && c;
console.log(x)

// ------------------------
console.log(5 == '5');
console.log(5 === '5');
console.log(5 != '5');
console.log(5 !== '5');
console.log(5 < 10);
console.log(5 > 10);
console.log(10 <= 10);
console.log(10 >= 5);
console.log(0 == false);
console.log(0 === false);
console.log(null == undefined);
console.log(null == 0);
console.log(null == NaN);
console.log(null === 0);
console.log(null === undefined);
console.log(0 === undefined);
console.log('' === undefined);
console.log(NaN == undefined);
console.log(undefined === undefined);

// ------------------------
const obj100 = { name: 'John' };
const obj200 = { name: 'John' };
const obj300 = obj1;
console.log(obj100 == obj200);
console.log(obj100 === obj200);
console.log(obj100 == obj300);

// ------------------------
const obj1 = { name: 'John' };
const obj2 = { name: 'John' };
const obj3 = obj1;
console.log(obj1 == obj2);
console.log(obj1 === obj2);
console.log(obj1 == obj3);
console.log(obj1 == {});
console.log(obj1 === {});
console.log(obj1 === obj1);

// ------------------------
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = arr1;
console.log(arr1 == []);
console.log(arr1 == [1, 2, 3]);
console.log([1, 2, 3] == [1, 2, 3]);
console.log([1, 2, 4] == [1, 2, 3]);
console.log(arr1 === arr2);
console.log(arr1 == arr3);

// ------------------------
console.log(NaN == NaN);
console.log(NaN === NaN);
console.log(Infinity > 1000);
console.log(Infinity < -1000);
console.log(0 == false);
console.log('' == false);
console.log(1 == true);
console.log('hello' == true);

// ------------------------
console.log(true && false);
console.log(true || false);
console.log(!true);
console.log((true && false) || (true && true));
console.log(!(true && false));
console.log((!false && true) || (!true || false));
console.log(!(true || false) && (true && false));
console.log(!(!true && false) || (true && true));
console.log((true || false) && (true && false) || (false && true));
console.log((true && false) || (false && true) || (true && true));

// ------------------------
console.log(5 > 3 && 10 < 20);
console.log(0 || false);
console.log(5 === 5 && 'hello' === 'world');
console.log(10 <= 10 || 'apple' === 'orange');
console.log(null && undefined);
console.log(0 || 'banana');
console.log('cat' && 'dog');
console.log(undefined || NaN);
console.log('' || 'apple');
console.log(true && (false || true));

// ------------------------
console.log(3 > 5 || 'apple' === 'orange');
console.log(null && true);
console.log(undefined || 'pear');
console.log('banana' && '');
console.log(false && 0);
console.log(10 === 5 || 1 > 0);
console.log('cat' || 'dog');
console.log(!0);
console.log((5 < 3 || 10 >= 10) && (0 == false || 'apple' === 'apple'));
console.log((true && false) || (true && true) && !(false || true));
console.log(!(!true && false) && !(true || false) || !(false && false));
console.log((5 > 3 && 10 < 20) || (0 || false) && (5 === 5 && 'hello' === 'world'));
console.log((10 <= 10 || 'apple' === 'orange') && (null && undefined) || (0 || 'banana') && ('cat' && 'dog'));

// ------------------------
console.log([1, 2, 3] && []);
console.log([] || {});
console.log([1, 2, 3] || []);
console.log({ name: 'John' } && { age: 30 });
console.log({} || { name: 'Alice' });
console.log(null && []);
console.log([1, 2, 3] || null);
console.log(undefined && {});
console.log({} || undefined);
console.log(['apple'] && ['banana']);
console.log(['apple'] || []);
console.log([] && { fruit: 'apple' });
console.log({} || []);
console.log([1, 2, 3].length && [].length);
console.log({}.name && { age: 30 }.age);
console.log({}.name || { age: 30 }.age);

// ------------------------
let firstName = "";
let lastName = "";
let nickName = "Суперкодер";
console.log(firstName || lastName || nickName || "Аноним")

// ------------------------
console.log(1 && null && 2);

// ------------------------
try {
  const foo = 1 || throw new Error() || null && 2
  console.log(foo);
} catch (error) {
  console.log('произошла ошибка!')
}

// ------------------------
const foo100 = '' ?? null || false && 12 && 'strong' ?? 'last word'
console.log(foo100)

// ------------------------
const foo = '' ?? 1
const bar = undefined || 2
const baz = null ?? 3
console.log(foo || bar && baz)







