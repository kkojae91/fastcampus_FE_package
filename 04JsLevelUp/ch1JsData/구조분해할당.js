// 구조 분해 할당 (Destructuring assignment)
// 비구조화 할당

const user = {
  name: "kkojae",
  age: 31,
  email: "kkojae@gmail.com",
};

// user의 필요한 속성값들만 추출해서 사용할 수 있다.
// const {name, email} = user;
// eg. user.name, user.email과 같은 의미를 name, email로 간단하게 사용 가능!!!!
// 기본값을 설정할 수 있다.
// 데이터가 없을 경우 기본값을 적용..
// 속성이름이 마음에 들지 않을 경우 아래와 같이 name: kkojae로 사용할 수 있다.
const { name: kkojae, age, email, address = "Korea" } = user;
// const [name, age, email, address] = user;

console.log(`사용자의 이름은 ${kkojae}입니다.`);
console.log(`${kkojae}의 나이는 ${age}세입니다.`);
console.log(`${kkojae}의 이메일 주소는 ${email}입니다.`);
console.log(address);

// 구조 분해 할당은 데이터 타입에 맞게 []사용해야한다. 객체데이터일 경우 {}
// 배열데이터에서는 순서대로 변수명을 설정할 수 있다.
const fruits = ["Apple", "Banana", "Cherry"];
const [a, b, c, d = "kkojae"] = fruits;
console.log(a, b, c, d);

// 필요한 값을 뽑아낼때는 아래와 같이 필요없는 값은 ,쉼표로 구분해주어야 한다.
const [a1, , c1] = fruits;
console.log(a1, c1);
