// data.filter((element, index) => {})
const numbers = [1, 2, 3, 4];
const fruits = ["Apple", "Banana", "Cherry"];

const a = numbers.map((number) => {
  return number < 3;
});
console.log(a);

// map함수와 가장 큰 차이점은 filter는 조건에 만족하는 값만 배열로 묶어서 반환해준다.
// map함수는 값의 불리언 값을 배열로 반환
// map, filter역시 원본 데이터에 손상을 주지 않는다.
const b = numbers.filter((number) => {
  return number < 3;
});
console.log(b);
console.log(numbers);

// data.find(), data.findIndex();
// 찾고싶은 값을 찾게 되면 찾은 값을 반환하고 순회 종료
const c = fruits.find((fruit) => {
  return /^B/.test(fruit);
});
console.log(c);

// data.findIndex();
// 찾고싶은 값을 찾게 되면 찾은 값의 인덱스 번호를 반환하고 순회 종료
const d = fruits.findIndex((fruit) => {
  return /^B/.test(fruit);
});
console.log(d);

// data.includes();
// data안에 값이 포함되어 있는지 확인할 때 사용 (반환 값은 boolean값)
const e = numbers.includes(3);
console.log(e);

const e1 = fruits.includes("kkojae");
console.log(e1);

// data.push(), data.unshift();
// 원본 데이터 변경

// data.push(b)
// b를 data배열 마지막에 집어 넣는다.
numbers.push(5);
console.log(numbers);

// data.unshift(b)
// b를 data배열 가장 앞에 집어 넣는다.
numbers.unshift(0);
console.log(numbers);

// data.reverse()
// 원본 수정됨 주의
// 원본 데이터를 뒤집어 준다.
numbers.reverse();
console.log(numbers);
fruits.reverse();
console.log(fruits);
numbers.reverse();
fruits.reverse();
// data.splice(startIndex, countNumber, item);
// startIndex부터 시작해서 countNumber 만큼 지운다.
// 원본 수정됨 주의
numbers.splice(2, 1);
console.log(numbers);

// index번호 2번 자리 뒤에 999를 끼워 넣어라.
// splice는 제거하는 용도, 특정 아이템을 끼워 넣는 역할을 하기도 한다.
numbers.splice(2, 0, 999);
console.log(numbers);

// 999를 -> 777로 바꿔라
// splice는 값을 교체하는 용도로 사용하기도 한다.
numbers.splice(2, 1, 777);
console.log(numbers);

// Banana다음에 Orange를 끼워 넣어라.
fruits.splice(2, 0, "Orange");
console.log(fruits);

// Orange를 Melon으로 값을 변경해라.
fruits.splice(2, 1, "Melon");
console.log(fruits);
