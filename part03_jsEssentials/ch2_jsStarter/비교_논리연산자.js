// 비교 연산자 (Comparison operator)
const a = 1;
const b = 3;

// === 일치 연산자 왼쪽 데이터와 오른쪽 데이터가 일치하는지 확인
console.log(a === b);

function isEqual(x, y) {
  return x === y;
}

console.log(isEqual(1, 1));
console.log(isEqual(2, "2"));

// !== 불일치 연산자 왼쪽 데이터와 오른쪽 데이터가 불일치 하는지 확인
console.log(a !== b);

// < 왼쪽의 데이터가 오른쪽의 데이터보다 작은지 확인
console.log(a < b);

// > 왼쪽의 데이터가 오른쪽의 데이터보다 큰지 확인
console.log(a > b);

// >= 왼쪽의 데이터가 오른쪽의 데이터보다 크거나 같은지 확인
console.log(a >= b);

// <= 왼쪽의 데이터가 오른쪽의 데이터보다 작거나 같은지 확인
console.log(a <= b);

// 논리 연산자 (logical operator)
const c = 1 === 1;
const d = "ab" === "ab";
const e = false;

console.log(c);
console.log(d);
console.log(e);

// && and 연산자
console.log("&&: ", c && d && e);
console.log(`&&: ${c && d && e}`);

// || or 연산자
console.log(`||: ${c || d || e}`);

// ! not 연산자
console.log(`!: ${c}`);
console.log(`!: ${!c}`);
