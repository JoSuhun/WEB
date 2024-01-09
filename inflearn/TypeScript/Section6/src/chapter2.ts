// 접근 제어자
// access modifier
// public, private, protected
class Employee {
  // 필드
  private name: string;
  protected age: number;
  public position: string;

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
const employee = new Employee("toto", 15, "developer");
// employee.name = "zozo";  // error (private 외부에서 접근 불가)
// employee.age = 24;   //error (protected 외부에서 접근 불가 / 확장된 파생 클래스에서는 접근 가능)
employee.position = "designer";
