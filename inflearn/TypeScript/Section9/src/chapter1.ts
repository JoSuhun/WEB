// 분산적인 조건부 타입
type StringNumberSwitch<T> = T extends string ? string : number;
let a: StringNumberSwitch<number>; // number
let b: StringNumberSwitch<string>; // string

let c: StringNumberSwitch<number | string>; // string | number 분산적인 조건부 타입
// StringNumberSwitch<number>
// |
// StringNumberSwitch<string>

let d: StringNumberSwitch<boolean | number | string>;
// StringNumberSwitch<bloolean>
// |
// StringNumberSwitch<number>
// |
// StringNumberSwitch<string>

// [ex1]
type Exclude<T, U> = T extends U ? never : T;
type A = Exclude<number | string | boolean, string>;
// Exclude<number|string>
// Exclude<string|string>
// Exclude<boolean|string>

// number | never | boolean
// number | boolean     // never은 공집합으로, union 시 결국 사라짐

// [ex2]
type Extract<T, U> = T extends U ? T : never;
type B = Extract<number | string | boolean, string>;    // string
// Extract<number|string>
// Extract<string|string>
// Extract<boolean|string>

// never | string | never
// string
