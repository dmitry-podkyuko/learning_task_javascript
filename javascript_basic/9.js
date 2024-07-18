// Что будет в консоли

var obj = {
  side: [1, 3, 4],
  run: function () {
    this.side.map(function (el, i) {
      console.log(this);
    });
  },
};

obj.run();