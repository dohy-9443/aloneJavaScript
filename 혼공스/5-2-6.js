// 배열 선언
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// 메소드를 연속적으로 사용

numbers
  .filter((value) => value % 2 === 0)
  .map((value) => value * value)
  .forEach((value) => console.log(value));
