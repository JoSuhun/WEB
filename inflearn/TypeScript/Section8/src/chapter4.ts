// template literal type

type Color = "red" | "black" | "green";

type Animal = "dog" | "cat" | "chicken";

type ColoredAnimal = `${Color}-${Animal}`;
// Color x Animal 모든 조합으로 리터럴이 만들어짐 ..
// 문자열로 여러가지 상황을 표현해야하는 경우에 사용