// mapped

interface User {
  id: number;
  name: string;
  age: number;
}

// mapped타입은 interface에서 만들 수 없다. 타입별칭으로 해야함.
// 다양한 형태로 interface를 변형해서 이용할 수 있지!!!!!!
type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
};

type BooleanUser = {
  [key in keyof User]: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한명의 유저 정보를 불러옴
function fetchUser(): ReadonlyUser {
  return {
    id: 1,
    name: "toto",
    age: 3,
  };
}
function updateUser(user: PartialUser) {
  // 수정하기
}
updateUser({
  age: 13,
});
