// power() 메소드 추가
Number.prototype.power = function (n = 2) {
  return this.valueOf() ** n;
};

// Number 객체의 power() 메소드를 사용
const a = 12;
console.log(`a.power(): ${a.power()}`);
console.log(`a.power(3): ${a.power(3)}`);
console.log(`a.power(4): ${a.power(4)}`);
