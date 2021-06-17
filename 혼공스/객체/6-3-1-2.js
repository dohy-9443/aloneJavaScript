const test = function (object) {
  return `${object.name} : ${object.age} : ${object.color}`;
};

console.log(
  test({
    name: "구름",
    age: 7,
    color: "갈색",
  })
);
