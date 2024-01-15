// [4] Pick<T, K>
// 뽑다, 고르다
// 객체 타입으로부터 특정 프로퍼티만 딱 뽑아내는 타입

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
};

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "legacy",
  content: "old..",
};

// [5] Omit<T, K>
// 생략하다, 빼다
// 객체 타입으로부터 특정 프로퍼티를 제거하는 타입

// type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

// [6] Record<V, K>

type Record<K extends keyof any, V> = {
  [key in K]: V;
};

type Thumbnail = Record<"large" | "medium" | "small", { url: string }>;
