const test = function ({ name, age, color, status = "이상 없음" }) {
  return `${name} : ${age} : ${color} : ${status}`;
};

console.log(
  test({
    name: "구름",
    age: 7,
    color: "갈색",
  })
);
