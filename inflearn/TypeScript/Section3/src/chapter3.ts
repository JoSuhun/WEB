// 객체 타입 간의 호환성
// 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮을까?
type Animal = {
    name:string
    color:string
}

type Dog = {
    name:string
    color:string
    breed:string
}

let animal:Animal = {
    name:'tiger',
    color:'yellow'
}

let dog:Dog = {
    name:'kiki',
    color:'pink',
    breed:'m'
}

animal = dog
// dog = animal     //❗️error