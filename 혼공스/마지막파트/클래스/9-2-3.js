// 사각형 클래스
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  // 사각형의 둘레를 구하는 메소드
  getPerimeter() {
    return 2 * (this.width + this.height);
  }
  // 사각형의 넓이를 구하는 메소드
  getArea() {
    return this.width * this.height;
  }
}

// 정사각형 클래스
class Square extends Rectangle {
  // Square 는 자식 클래스 Rectangle 부모 클래스
  constructor(length) {
    super(length, length);
    // super는 부모의 생성자 함수를 호출하는 코드
  }
  // getPerimeter(), getArea() 메소드 제거
}

// 클래스 사용하기
const square = new Square(10);
const rectangle = new Rectangle(10, 20);

// getPerimeter(), getArea() 메소드를 선언하지 않았지만, 상속 받았으므로 사용 가능
console.log(`정사각형 둘레: ${square.getPerimeter()}`);
console.log(`정사각형 넓이: ${square.getArea()}`);
console.log(`직사각형 둘레: ${rectangle.getPerimeter()}`);
console.log(`직사각형 넓이: ${rectangle.getArea()}`);
