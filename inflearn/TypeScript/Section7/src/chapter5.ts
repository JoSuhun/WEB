// promise
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20);
    reject("실패"); // 실패했을 때 타입은 정의해줄 수 없다. any로 받아야됨
  }, 3000);
});

promise.then((response) => {
  console.log(response * 10);
});

promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});

// promise를 반환하는 함수 타입을 정의
interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost():Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: " title",
        content: "content",
      });
    }, 3000);
  });
} ``
const postRequest = fetchPost()
postRequest.then((post)=>{
  post.id
})