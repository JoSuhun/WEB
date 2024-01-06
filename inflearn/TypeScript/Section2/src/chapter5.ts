// enum 타입
// 여러가지 값들에 각각 이름을 부여하여 열거해두고 사용하는 타입
enum Role {
    ADMIN = 0,
    USER = 1,
    GUEST= 2,
}
enum Language {
    korean = 'ko',
    english = 'en'
}

const user1 = {
    name: 'hun',
    role: Role.ADMIN, // admin
    language: Language.korean,
}
const user2 = {
    name: 'cha',
    role: Role.USER // user
}
const user3 = {
    name: 'tha',
    role: Role.GUEST // guest
}

console.log(user1, user2, user3)