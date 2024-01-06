// 배열
let numArr: number[] = [1,2,3]
let strArr: string[] = ['tomato', 'apple', 'banana']

let boolArr: Array<boolean> = [true, false, false, true] // 제네릭

// 배열 요소의 타입이 다양할 경우
let multiArr: (number|string|boolean)[] = [1, 'tomato', true]

// 다차원 배열
let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5]
]

// 튜플 (길이와 타입이 고정된 배열)
let tup1: [number, number] = [1, 2]
let tup2: [number, string, boolean] =[1, "a", true]

