// 얕은 복사(Shallow copy), 깊은 복사(Deep copy);
const user = {
  name: "kkojae",
  age: 31,
  emails: ["kkojae@gmail.com"],
};

const copyUser = user;
console.log(copyUser === user);

user.age = 52;
console.log("user", user);
console.log("copyUser", copyUser);

console.log("=====");
console.log("=====");

// 얕은 복사
// 참조형 데이터는 복사 개념으로 사용해주는게 좋다.
const shallowCopyUser = Object.assign({}, user);
user.age = 33;
console.log("shallowCopyUser", shallowCopyUser);
console.log("user", user);

// 전개연산자를 통해 얕은 복사 !
const spreadCopyUser = { ...user };
user.age = 99;
console.log(user);
console.log(spreadCopyUser);

// 객체 데이터 안에 객체 데이터가 있을 경우 첫번째 객체 데이터만 얕은 복사가 이루어 진다.
// 즉 두번째 객체 데이터는 같은 메모리 주소를 참조한다.
user.emails.push("jaejeung3210@gmail.com");
console.log(user.emails === spreadCopyUser.emails);

// 깊은 복사!!;
// 참조 데이터 안에 또다른 참조 데이터가 있을 경우는 깊은 복사를 활용해야한다.
// npm install lodash
import _ from "lodash";

// lodash를 사용하면 깊은 복사를 할 수 있다.
// cloneDeep() 메소드를 사용하면 깊은 복사를 쉽게 사용할 수 있다.
const lodashCopyUser = _.cloneDeep(user);
console.log(lodashCopyUser === user);
user.emails.push("kko@gmail.com");
console.log(user);
console.log(lodashCopyUser);
