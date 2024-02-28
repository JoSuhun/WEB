// infer

type FuncA = () => string;
type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>; // string

type B = ReturnType<FuncB>; // number

type C = ReturnType<number>; // never

// [ex1]
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 Promise타입이어야 함
// 2. Promise 타입의 결과값 타입을 반환해야 함

type PromiseA = PromiseUnpack<Promise<number>>;     // number

type PromiseB = PromiseUnpack<Promise<string>>;     // string