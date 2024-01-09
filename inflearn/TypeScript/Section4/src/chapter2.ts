// 함수 타입 호환성
// 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가?

// 1. 반환 값의 타입이 호환되는가
type A = () => number
type B = () => 10

let a:A = () => 10
let b:B = () => 10

a = b
// b = a    //error (down casting)

// 2. 매개변수의 타입이 호환되는가
// 2-1. 매개변수의 개수가 같다
type C = (value: number) => void
type D = (value: 10) => void

let c:C = (value) => {}
let d:D = (value) => {}

// c = d    //error (up casting)
d = c


type Animal = {
    name: string
}
type Dog = {
    name: string
    color: string
}

let animalFunc = (animal:Animal) => {
    console.log(animal.name)
}
let dogFunc = (dog:Dog) => {
    console.log(dog.name)
    console.log(dog.color)
}

// animalFunc = dogFunc     // error
dogFunc = animalFunc

// 2-2. 매개변수의 개수가 다르다
type Func1 = (a:number, b:number) => void
type Func2 = (a:number) => void

let func1 : Func1 = (a, b) => {}
let func2 : Func2 = (a) => {}

func1 = func2
// func2 = func1    // error