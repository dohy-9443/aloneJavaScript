function createStudent(name, Kor, Eng, Mat, Sci) {
  return {
    // 속성을 선언
    name: name,
    Kor: Kor,
    Eng: Eng,
    Mat: Mat,
    Sci: Sci,

    // 메소드 선언
    getSum() {
      return this.Kor + this.Eng + this.Mat + this.Sci;
    },

    getAverage() {
      return this.getSum() / 4;
    },

    toString() {
      return `${this.name}\t${this.getSum()} 점\t${this.getAverage()} 점\n`;
    },
  };
}

// 객체를 선언
const students = [];
students.push(createStudent("구름", 87, 98, 88, 90));
students.push(createStudent("별이", 92, 98, 96, 88));
students.push(createStudent("겨울", 76, 96, 94, 86));
students.push(createStudent("겨울", 98, 52, 98, 92));

// 출력
let output = `이름\t총점\t\t평균\n`;
for (const s of students) {
  output += s.toString();
}

console.log(output);
