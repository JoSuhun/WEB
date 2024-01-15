// 제네릭 인터페이스
interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
}; // 타입변수에 할당한 변수에 반드시 타입을 할당해주어야 한다.

let keyPair2: KeyPair<boolean, string> = {
  key: true,
  value: "123",
};

// 인덱스 시그니처
interface NumberMap {
  [key: string]: number;
}
let numberMap1: NumberMap = {
  key: -123,
};

interface Map<V> {
  [key: string]: V;
}
let stringMap: Map<string> = {
  key: "value",
};
let boolMap: Map<boolean> = {
  key: true,
  key1: false,
};

// 제네릭 타입 별칭
type Map2<V> = {
  [key: string]: V;
};
let stringMap2: Map2<string> = {
  key: "qwr",
};

// 제네릭 인터페이스 활용 예시
interface Student {
  type: "student";
  school: string;
}
interface Dev {
  type: "dev";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user:User<Student>){
    const school = user.profile.school
    console.log(`${school}로 등교함`)
}

const devUser : User<Dev> = {
    name: 'tomato',
    profile:{
        type: 'dev',
        skill: 'TS'
    }
}
const studentUser : User<Student> = {
    name: 'orange',
    profile:{
        type:'student',
        school:'CNU'
    }
}