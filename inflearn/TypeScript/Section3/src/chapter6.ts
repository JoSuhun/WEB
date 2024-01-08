// 타입 단언 Type Assertion
type Person = {
    name:string
    age:number
}
let person = {} as Person
person.name = 'toto'
person.age = 23

type Dog = {
    name:string
    color:string 
}

let dog = {
    name:'tororo',
    color:'brown',
    breed:'qwer'
} as Dog

// type assertion 규칙
// 값 as 단언
// A as B
// A가 B의 슈퍼타입이거나
// A가 B의 서브타입이어야 함

let num1 = 10 as never
let num2 = 10 as unknown

// let num3 = 10 as string  //error

// const 단언
let num4 = 10 as const

let cat = {
    name:'kiki',
    color:'black'
} as const  // name과 color가 readonly 항목이 됨

// Non Null 단언
type Post = {
    title: string
    author?: string
}

let post:Post = {
    title:'post1',
    author:'qwer'
}

const len:number = post.author!.length
