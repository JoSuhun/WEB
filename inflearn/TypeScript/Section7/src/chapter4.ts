// generic class
class List<T> {
  // 생성자
  constructor(private list: T[]) {}

  // 메서드
  push(data: T) {
    this.list.push(data);
  }
  pop() {
    return this.list.pop();
  }
  print() {
    console.log(this.list);
  }
}

const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(12);
numberList.print();

const stringList = new List(['a','b','c'])
stringList.pop()
stringList.push('asdf')
stringList.print()