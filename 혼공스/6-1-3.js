const book = {
  name: "혼자 공부하는 파이썬",
  price: 18000,
  publisher: "한빛미디어",
};

console.log(book);

delete book["publisher"];

console.log(book);

book["publisher"] = "한빛미디어";
console.log(book);
