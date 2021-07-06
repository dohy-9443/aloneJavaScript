// 정사각형 클래스
class Square {
  #length; // 이 위치에 해당 속성을 private 속성으로 사용하겠다고 선언

  constructor(length) {
    if (length <= 0) {
      throw "길이는 0 보다 커야 합니다.";
    }

    this.#length = length;
  }

  getPerimeter() {
    return 4 * this.#length;
  }
  getArea() {
    return this.#length * this.#length;
  }
}

// 클래스 사용
const square = new Square(10);
square.#length = -10;
console.log(`정사각형 둘레: ${square.getPerimeter()}`);
console.log(`정사각형 넓이: ${square.getArea()}`);
