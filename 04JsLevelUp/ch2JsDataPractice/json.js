// JSON (JavaScript Object Notation)
// 자바스크립트의 객체 표기법

// js파일을 제외한 다른 파일들을 불러올때는 확장자를 생략할 수 없다.
import myData from "./myData.json";

// json내용은 문자데이터이지만 import해서 불러올 경우 자동으로 데이터를 object화 시켜준다.
console.log(myData);
console.log(typeof myData);

const user = {
  name: "kkojae",
  age: 31,
  emails: ["kkojae@gmail.com", "jaejeung3210@gmail.com"],
};

console.log("user", user);

const str = JSON.stringify(user);
console.log("str", str);
console.log(typeof str);

const obj = JSON.parse(str);
console.log("obj", obj);
