const test = function (object) {
  const { name, age, color, status } = { status: "이상없음", ...object };

  return `${name} : ${age} : ${color} : ${status}`;
};

console.log(
  test({
    name: "구름",
    age: 7,
    color: "갈색",
  })
);
