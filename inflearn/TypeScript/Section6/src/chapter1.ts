// typeScript 클래스
const employee = {
  name: "toto",
  age: 44,
  position: "frontend",
  work() {
    console.log("working ..");
  },
};

class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("im working ...");
  }
}

class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position)
    this.officeNumber = officeNumber
  }
}

const employeeB = new Employee("tororororo", 43, "front");
console.log(employeeB);
employeeB.work();

const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};
