// как работает этот ПСЕВДОКОД
const a = {
  admin: false,
}

const b = { proto: a }
b.admin = true;
const c = { proto: a }

console.log(c.admin);