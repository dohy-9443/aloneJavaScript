// 정사각형 클래스
class Square {
  constructor(length) {
    if (length <= 0) {
      throw "길이는 0보다 커야 합니다.";
    }
    // throw 키워드를 사용해 강제로 오류를 발생
    this.length = length;
  }

  // 정사각형의 둘레를 구하는 메소드
  getPerimeter() {
    return 4 * this.length;
  }

  // 정사각형의 넓이를 구하는 메소드
  getArea() {
    return this.length * this.length;
  }
}

// 클래스 사용
const square = new Square(10);
square.length = -10; // 이렇게 음수를 지정하는 것은 막을 수 없다.
console.log(`정사각형의 둘레: ${square.getPerimeter()}`);
console.log(`정사각형의 둘레: ${square.getArea()}`);
