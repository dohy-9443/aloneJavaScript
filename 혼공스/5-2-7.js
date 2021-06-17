setTimeout(() => {
  console.log("1초 후에 실행");
}, 1000);

let count = 0;
setInterval(() => {
  console.log(`1초마다 실행된다. ${count}번째`);
  count++;
}, 1000);

let arr = [3, 5, 9];
arr.node = "school";

for (let key of arr) {
  console.log(key);
}
