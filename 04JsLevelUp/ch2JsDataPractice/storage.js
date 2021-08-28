const user = {
  name: "kkojae",
  age: 31,
  emails: ["kkojae@gmail.com", "jaejeung3210@gmail.com"],
};

const str = localStorage.getItem("user");
const obj = JSON.parse(str);

obj.age = 22;
// console.log(obj);
const objJSON = JSON.stringify(obj);
localStorage.setItem("user", objJSON);

// localStorage에 저장된 데이터는 직접 제거하지 않는 이상 반영구적으로 저장되어 있다.
// 로그인되어 있지 않는 유저의 정보를 기록해뒀다. 컴퓨터를 종료 후 다시 접속했을 때 주문 정보, 둘러본 상품 등 체크를 다시 해줄수 있는 부분?!
// 삼항 연산자를 통해 불러오는 모듈이 달라지면 되지 않을까 생각이 든다.

// const userJson = JSON.stringify(user);

// // localStorage에는 문자 데이터를 저장해주어야 합니다. 그렇기 때문에 JSON.stringify()를 통해 객체를 문자화 시켜서 setItem의 두번째 인자로 넣어준다.
// localStorage.setItem("user", userJson);

// // localStorage에서 getItem을 가지고 오면 JSON.parse()를 통해 문자를 객체화 시켜주어야 합니다.
// const localUser = localStorage.getItem("user");
// const jsonToUser = JSON.parse(localUser);
// console.log(jsonToUser);

// localStorage의 데이터를 삭제하고 싶을 경우 removeItem()인자에 key값을 입력해주면 됩니다.
// localStorage.removeItem("user");
