const dog = {
  name: "구름",
  age: 7,
  color: "갈색",
  status: "다리가 아파요",
};

const newDog = {
  status: "이상 없음",
  ...dog,
  // 뒷부분에 dog의 내용을 뽑아라
};

console.log(newDog);
