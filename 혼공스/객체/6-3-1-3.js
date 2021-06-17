const test = function (name, age, color, status = "이상 없음") {
  return `${name} : ${age} : ${color} : ${status}`;
};

console.log(test("구름", 7, "갈색"));
