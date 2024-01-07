// 여러개의 타입을 합성해서 새롭게 만들어 낸 타입

// 합집합 타입 - Union
let a: string | number
a = 1
a = 'asdf'

let arr: (string | number | boolean)[] = ['qewr', false, 4, 'zxcv']

type Union1 = Dog | Person

let union1:Union1 = {
    name: 'qer',
    color: 'qwer',
}
let union2:Union1 = {
    name: 'wer',
    language: 'adsf',
}
let union3:Union1 = {
    name:'qerqer',
    color:'qerqer',
    language:'asdf',
}
// let union4:Union1 = {
//     color:'qerqer',
//     language:'asdf',
// }    //❗️ error

// let union4:Union1 = {
//     name: 'qer'
// }    //❗️ error



// 교집합 타입 - Intersection
let variable: number & string   //type => never (number과 string의 교집합은 공집합이다)

type Dog = {
    name: string
    color: string
}
type Person = {
    name: string
    language: string
}

type Intersection = Dog & Person

let intersection:Intersection = {
    name:'qer',
    color:'asdf',
    language:'zxcv'
}

