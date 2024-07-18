
let variable = 'V';
const f = () => {
  console.log(variable);
  return this.a;
}
a = 'A';
const g = f.bind({ a: 'G' });
console.log(g());

const h = g.bind({ a: 'H' });
console.log(h());
variable = 'V4';
const o = {
  a: 'O', f: f, g: g, h: h, n: () => {
    variable = 'V3'
    const variable = 'V2';
    f();
  }
};
console.log(o.a, o.f(), o.g(), o.h());