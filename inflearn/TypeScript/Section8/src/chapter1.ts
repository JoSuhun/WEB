// indexed Access Type

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
} // interface는 object형식에 최적이니까

function printAuthorInfo(author: Post["author"]) {
  // "author" 인덱스 <- type만 들어갈 수 있음
  console.log(`${author.name} - ${author.id}`);
}

const post: Post = {
  title: "title",
  content: "content",
  author: {
    id: 1,
    name: "toto",
    age: 8,
  },
};

printAuthorInfo(post.author);

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[]; // 포스트 타입의 요소를 여러개 저장하는 포스트 리스트 타입

function printAuthorInfoList(author: PostList[number]["author"]) {
  console.log(`${author.name} - ${author.id}`);
}

const postlist: PostList[number] = {
  // 배열 타입으로부터 하나의 요소의 타입만 가져온다
  title: "title",
  content: "content",
  author: {
    id: 1,
    name: "toto",
    age: 8,
  },
};

type Tup = [number, string, boolean]

type Tup0 = Tup[0]
type Tup1 = Tup[1]
type Tup2 = Tup[2]
