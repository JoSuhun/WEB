// 클래스

let studentA = {
  name: "toto",
  grade: "A+",
  age: 45,
  study() {
    console.log("wer");
  },
  introduce() {
    console.log("hi");
  },
};

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("study hard");
  }
  introduce() {
    console.log(`hi, I'm ${this.name}.`);
  }
}

let studentB = new Student("midori", "A", 53);
console.log(studentB); // Student { name: 'qer', grade: 'A', age: 53 }
// 클래스를 이용하여 만든 객체 => 인스턴스
studentB.study(); //study hard
studentB.introduce(); //hi

class StudentDeveloper extends Student {
  //필드
  favorite;

  //생성자
  constructor(name, grade, age, favorite) {
    super(name, grade, age)
    this.favorite = favorite;
  }

  // 메서드
  programming() {
    console.log(`${this.favorite}가 제일 좋아.`);
  }
}

const studentDeveloper = new StudentDeveloper('tomato', 'C', 42, 'TS')
console.log(studentDeveloper)
studentDeveloper.programming()