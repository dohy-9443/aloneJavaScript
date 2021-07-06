// 정사각형 클래스
class Square {
  #length;

  constructor(length) {
    this.setLength(length);
  }

  // 함수를 사용하므로, 내부에서 예외 처리 등을 할 수 있다.
  setLength(value) {
    if (value <= 0) {
      throw `길이는 0보다 커야 합니다.`;
    }
    this.#length = value;
  }

  getLength(value) {
    return this.#length;
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
console.log(`한 변의 길이는 ${square.getLength()} 입니다.`);

// 예외 발생시기키
square.setLength(-10);
