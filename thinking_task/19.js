// Создать функцию inverse, которая заменит 1 на 0 и наоборот 
// во всем дереве.

const tree = {
  a: {
    a: 1,
    b: {
      a: 0,
      b: 1
    },
    c: 0
  },
  b: 0,
  c: 1
};

inverse(tree);