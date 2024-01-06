// object
let user:{
    id?:number // 없어도 되는 property (Optional Property)
    name:string
} = {
    id:1,
    name:'조수훈',
}

user = {
    name: '토마토'
}


let config:{
    readonly apiKey:string // 해당 Property의 값이 바뀌는 것을 막아줌
} = {
    apiKey: 'MY API KEY' // 절대 값 수정되면 안될 때
}