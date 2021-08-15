// 형 변환 (Type conversion)

const a = 1;
const b = "1";

console.log(a === b);

// 동등 연산자 (형 변환이 일어나기 때문에 의도하지 않는 결과가 나올 수 있다. 그렇기 때문에 일치 연산자를 사용!! === )
console.log(a == b);

// Truthy(참 같은 값)
// true, {}, [], 1, 2, 'false', -12, '3.14', ...

// Falsy(거짓 같은 값)
// false, '', null, undefined, 0, -0, NaN

if (true) {
  console.log(123);
}
