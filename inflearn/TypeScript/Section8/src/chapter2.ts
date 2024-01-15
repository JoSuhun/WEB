// keyof

// interface Person {
//   name: string;
//   age: number;
// }

type Person = typeof person
// 타입을 추론해서 변수 Person에 타입을 정의해줌 ㅎㄷㄷ

function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

const person = {
  name: "toto",
  age: 4,
};

getPropertyKey(person, "name");

