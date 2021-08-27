// 전개 연산자 (Spread)

const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);
console.log(...fruits);

function toObject(a, b, c) {
  return {
    // key와 value가 같은 값일 경우 생략 가능
    a: a,
    b,
    c,
  };
}

console.log(toObject(...fruits));

// 위의 toObject함수를 화살표 함수를 사용하면 아래와 같이 축약할 수 있다.
const toObject2 = (a, b, c) => ({ a, b, c });
console.log(toObject2(...fruits));

const fruits2 = ["Apple", "Banana", "Cherry", "Orange"];

// 인자 값이 확장 가능성이 있을 경우 ...args를 사용해서 배열로 받을 수 있다.
function toObject3(a, b, ...args) {
  return {
    a,
    b,
    args,
  };
}
console.log(toObject3(...fruits2));
