const userAge = {
  // key: value
  name: "kkojae",
  age: 31,
};

const userEmail = {
  name: "kkojae",
  email: "kkojae@gmail.com",
};

// Object.assign();
const target = Object.assign(userAge, userEmail);
console.log(target);
console.log(userAge);
console.log(target === userAge);

const a = { k: 123 };
const b = { k: 123 };
console.log(a === b);

// 새로운 메모리를 사용할 경우 아래와 같이 작성
// 원본 데이터는 손상되지 않고, 새로운 객체 데이터를 생성한다.
const newObj = Object.assign({}, userAge, userEmail);
console.log(newObj);
console.log(userAge);
console.log(newObj === userAge);

// 서로 다른 메모리를 사용하기 때문에 Object 값이 동일하더라도
// 비교연산자를 사용할 경우 false값을 얻게 된다.
const target2 = Object.assign({}, userAge);
console.log(target2);
console.log(userAge);
console.log(target2 === userAge);

const user = {
  name: "kkojae",
  age: 31,
  email: "kkojae@gmail.com",
};
// Object.keys()
// object의 key들만 추출해서 새로운 배열로 반환한다.
const keys = Object.keys(user);
console.log(keys);

console.log(user["email"]);

// keys 활용법
const values2 = keys.map((key) => user[key]);
console.log(values2);

// Object.values()
// object의 value들만 추출해서 새로운 배열로 반환한다.
const values = Object.values(user);
console.log(values);
