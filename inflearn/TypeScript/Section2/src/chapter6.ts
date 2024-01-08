// any
// 특정 변수의 타입을 우리가 확실히 모를 때 // typeScript의 type을 다 통과해버려
let anyVar: any = 10
anyVar = 'tomato'
anyVar = true
anyVar = () => {}

let num:number = 10
num = anyVar
console.log(num)

// unknown
let unknownVar: unknown
unknownVar = 'toto'
unknownVar = 1
unknownVar = ()=>{}

// any, unknown 모두 모든 타입의 값을 할당받을 수 있지만
// any는 반대로도 모두 가능한 반면
// unknown은 반대로는 다 안된다