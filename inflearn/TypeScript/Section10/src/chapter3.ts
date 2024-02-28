// Exclude<T, U>
// 제외
// T에서 U를 제거

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<string | boolean, boolean>; // string

// Extract<T, U>
// T에서 U를 추출

type Extract<T, U> = T extends U ? T : never;

type B = Extract<string | boolean, boolean>; // boolean

// ReturnType<T>
// 함수의 반환값 타입을 추출
type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;

function funcA() {
  return "toto";
}
function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>;
type ReturnB = ReturnType<typeof funcB>;
