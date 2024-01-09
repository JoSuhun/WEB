// interface
// class

interface CharacterInterface {
  name: string;
  movespeed: number;
  move(): void;
}

// interface는 class의 설계도 ..
class Character implements CharacterInterface {
  constructor(public name: string, public movespeed: number) {
  } // interface로 정의하는 필드는 무조건 public

  move(): void {
    console.log("qwerqwer");
  }
}
