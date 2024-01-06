// 타입 별칭
type User = {
    id:number
    name:string
    nickname:string
}

let user:User = {
    id:1,
    name:'tomato',
    nickname: 'midori',
}

let user2:User = {
    id:2,
    name:'banana',
    nickname:'kikiki'
}

// 인덱스 시그니처
type contryCodes = {
    [key : string] : string
}
let contryCodes:contryCodes = {
    Korea: 'ko',
    UnitedState: 'us',
    UnitedKingdom: 'uk',
}

type contryNumberCodes = {
    [key : string] : number
}
let contryNumberCodes:contryNumberCodes = {
    Korea:410,
    UnitedState:840,
    UnitedKingdom:826,
}