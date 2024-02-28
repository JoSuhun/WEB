// void
// 아무것도 없음

function func1 (): string { // 함수의 반환값이 문자열임을 명시할수도 있음
    return 'tomato'
}

function func2 (): void {
    console.log('tomato')
}

let a: void
// a = 1    error// viod형식에는 어떠한 값도 할당할 수 없다.
a = undefined // undefined 제외

// never
// 존재하지 않는 불가능한 타입 (모순)
function func3 (): never {
    while (true) {}
}

function func4 (): never {
    throw new Error()
}

let b: never
// never = undefined    error
// never = null     error