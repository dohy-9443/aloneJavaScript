const num = 52000;
num.won = function () {
  return this.valueOf() + "원";
};

console.log(num.won());
