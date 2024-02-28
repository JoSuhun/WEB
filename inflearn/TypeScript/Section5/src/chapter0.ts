// interface

interface Person {
    readonly name: string
    age?: number
    // sayHi: () => void
    sayHi(): void
    sayHi(a:number, b:number): void
}
// type의 Union, Intersection 안됨

const person : Person = {
    name: 'toto',
    sayHi: function () {
        console.log('hihi')
    }
}

person.sayHi()
person.sayHi(1, 2)