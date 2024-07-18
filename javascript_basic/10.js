// Что будет в консоли?

const sq = {
  s: 5,
  area() {
    return this.s * this.s;
  },
  p: () => 4 * this.s,
};

sq.area();
sq.p();