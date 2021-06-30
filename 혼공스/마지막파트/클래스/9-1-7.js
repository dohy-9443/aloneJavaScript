class Student {
  constructor(name, Kor, Eng, Mat, Sci) {
    this.name = name;
    this.Kor = Kor;
    this.Eng = Eng;
    this.Mat = Mat;
    this.Sci = Sci;
  }
}

// 객체 선언
const students = [];
students.push(new Student("구름", 87, 98, 88, 90));
students.push(new Student("별이", 92, 98, 96, 88));
students.push(new Student("겨울", 76, 96, 94, 86));
students.push(new Student("겨울", 98, 52, 98, 92));
