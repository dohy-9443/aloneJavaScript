const test = function (object) {
  return `${object.name} : ${object.age} : ${object.color} : ${object.status}`;
};

console.log(
  test({
    name: "구름",
    age: 7,
    color: "갈색",
    status: "이상없음",
  })
);
