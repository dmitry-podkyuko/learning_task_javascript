// Есть объект

const tree = {
  value: 1,
  next: [
    {
      value: 2,
      next: null,
    },
    {
      value: 2,
      next: {
        value2: 4,
        next: null,
      },
    },
  ],
  foo: {
    bar: {
      baz: [
        { value: 9 },
        {
          value: 2,
          next: {
            value: 4,
            next: null,
          },
        },
      ],
    },
    baz: 33,
    value: 1,
  },
};

sum(tree, 'value') // --> 21

// Напишите функцию которая принимает объект и название ключа,
// и рекурсивно просчитывает все значения по ключу в объекте 