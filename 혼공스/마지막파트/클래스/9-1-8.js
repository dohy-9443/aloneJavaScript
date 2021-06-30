class Student {
  constructor(name, Kor, Eng, Mat, Sci) {
    this.name = name;
    this.Kor = Kor;
    this.Eng = Eng;
    this.Mat = Mat;
    this.Sci = Sci;
  }

  getSum() {
    return this.Kor + this.Eng + this.Mat + this.Sci;
  }

  getAverage() {
    return this.getSum() / 4;
  }

  toString() {
    return `${this.name}\t${this.getSum()} 점\t${this.getAverage()} 점\n`;
  }
}

// 객체 선언
const students = [];
students.push(new Student("구름", 87, 98, 88, 90));
students.push(new Student("별이", 92, 98, 96, 88));
students.push(new Student("겨울", 76, 96, 94, 86));
students.push(new Student("겨울", 98, 52, 98, 92));

// 출력
let output = "이름\t총점\t\t평균\n";
for (const s of students) {
  output += s.toString();
}

console.log(output);
