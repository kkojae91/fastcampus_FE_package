const numbers = [1, 2, 3, 4];
const fruits = ["Apple", "Banana", "Cherry"];

console.log(numbers);
console.log(fruits);

console.log(numbers[1]);
console.log(fruits[2]);

// [].length 배열의 개수를 출력한다.
console.log(numbers.length);
console.log(fruits.length);
console.log([1, 2].length);

console.log([].length);

// [].concat() data1.concat(data2);
// data1배열 뒤에 data2배열을 합쳐서 반환된다. (원본 손상 X);
console.log(numbers.concat(fruits));
console.log(numbers);
console.log(fruits);

// spread연산을 사용.
console.log([...numbers, ...fruits]);

// data.forEach((element, index, array) => {})
// data를 순회하는데 callback 함수의 인자로는 element, index, array가 있다.
// callback 인자명은 자유롭게 변경 가능.
// array는 자주 사용하지 않는다.
// forEach는 반환값이 존재하지 않는다.
fruits.forEach((element, index, array) => {
  console.log(element, index, array);
});

const a = fruits.forEach((fruit, index) => {
  console.log(`${fruit} - ${index}`);
});
console.log(a);

// data.map((element, index) => {})
// forEach와 가장 큰 차이점, 반환 값을 새로운 배열을 만들어 반환한다.
const b = fruits.map((fruit, index) => {
  return `${fruit} - ${index}`;
});
console.log(b);

const b1 = fruits.map((fruit, index) => {
  return {
    id: index,
    name: fruit,
  };
});

console.log(b1);

// return 생략할 경우 ({}) 객체를 값으로 변환
const b2 = fruits.map((fruit, index) => ({
  id: index,
  name: fruit,
}));
console.log(b2);
