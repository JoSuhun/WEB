// 함수 타입 정의
// 어떤 [타입]의 매개변수를 받고, 어떤 [타입]의 결과값을 반환하는지 ..
function func(a:number, b:number):number {
    return a+b
}

// 화살표 함수
const add = (a:number, b:number):number => a+b

// 함수 매개변수
function introduction(name = 'jojo', tall?:number) {
    console.log(`name: ${name}`)
    if (typeof tall === 'number') {
        console.log(`tall: ${tall+10}`)
    }
}
introduction('jojo', 190)
introduction('toto')

function getSum(...rest : number[]) {
    let sum = 0
    rest.forEach((it)=>(sum+=it))
    return sum
}
getSum(1, 2, 3)
getSum(1, 2, 3, 4, 5)