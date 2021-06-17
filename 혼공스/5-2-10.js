console.log(`------ 다른 곳에서 가져온 코드 ------`);
let pi = 3.14;
console.log(`파이 값은 ${pi}이다.`);
console.log();
console.log(`------ 블록을 사용한 스코프 생성 ------`);
{
  let pi = 3.141592;
  console.log(`파이 값은 ${pi}이다.`);
}
console.log(`블록 밖에 파이 값은 ${pi}이다.`);
console.log();
console.log(`------ 함수 블록을 사용한 스코프 생성 ------`);
function sample() {
  let pi = 3.141592;
  console.log(`파이 값은 ${pi}이다.`);
}
sample();
console.log(`함수 밖에 파이 값은 ${pi}이다.`);
