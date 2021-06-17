// 변수를 선언
const pet = {
  name: "구름",
  eat: function (food) {
    console.log(`${this.name}은/는 ${food}을/를 먹습니다.`);
  },
  bark: function () {
    console.log(`${pet.name}이가 짖습니다.`);
    console.log(`${this.name}이가 짖는다.`);
  },
  sleep: () => {
    console.log(`${pet.name}이가 잡니다.`);
    console.log(`${this.name}이가 잔다.`);
  },
};

// 메소드 호출
pet.eat("밥");
pet.bark();
pet.sleep();
