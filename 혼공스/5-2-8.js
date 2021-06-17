let count = 0;
let id = setInterval(() => {
  console.log(`1초마다 실행된다.(${count}번째)`);
  count++;
}, 1000);

setTimeout(() => {
  console.log("타이머 종료");
  clearInterval(id);
}, 5000);
