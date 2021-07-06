// 정사각형 클래스
class Square {
  constructor(length) {
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
const square = new Square(-10); // 길이에 음수를 넣어서 사용
console.log(`정사각형의 둘레: ${square.getPerimeter()}`);
console.log(`정사각형의 둘레: ${square.getArea()}`);
