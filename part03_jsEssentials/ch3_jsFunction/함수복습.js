// 함수 복습

function sum(x, y) {
  console.log(x + y);
  return x + y;
}

sum(1, 3);
const sumFunction = sum(4, 16);
console.log(sumFunction);

const sum2 = function (x, y) {
  if (x < 2) {
    return;
  }
  return x + y;
};

console.log(sum2(1, 3));
console.log(sum2(4, 3));

// 전달되는 인자를 명시하지 않아도 arguments객체에 인자들이 담겨져 있다.
function sum3() {
  console.log(arguments);
}

sum3(7, 3);

// 인자를 명시하지 않고 확장성을 가질 경우 아래와 같이 ...args로 표현해주는게 좋다.
function sum4(...args) {
  console.log(args);
  return args[0] + args[1];
}

const a = sum4(5, 4);
console.log(a);

// 화살표 함수
const double = function (x) {
  return x * 2;
};
console.log(`double : ${double(7)}`);

const doubleArrow = (x) => x * 2;

console.log(`doubleArrow : ${doubleArrow(8)}`);

// arrow function으로 object를 반환할경우 표현방법
// ({}) 소괄호 사이에 중괄호를 넣어주면서 객체를 값으로 표현하게 만들어 준다.
const returnObj = () => ({
  name: "kkojae",
});

console.log(returnObj());
