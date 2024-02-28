// 함수 타입 표현식
type Add = (a:number, b:number) => number

const add:Add = (a, b) => a+b

type Operation = {
    (a:number, b:number): number
}

const add2:Operation = (a, b) => a+b