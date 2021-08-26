const pi = 3.14159265358979;
console.log(pi);

const str = pi.toFixed(2);
console.log(str);
console.log(typeof str);

// 소숫점 자리는 버리고, 정수 부분만 사용하고 싶을 경우
// parseInt(data)
const integer = parseInt(str);
// 소숫점 자리만 나오는게 아니고, 소숫점 자리도 포함해서 출력하고 싶을 경우
// parseFloat(data)
const float = parseFloat(str);
console.log(integer);
console.log(float);
console.log(typeof integer, typeof float);

// 절대값 Math.abs(data);
console.log(`abs: ${Math.abs(-12)}`);

// 가장 작은 값 Math.min(data1, data2);
console.log(`min: ${Math.min(2, 8)}`);

// 가장 큰 값 Math.max(data1, data2);
console.log(`max: ${Math.max(2, 8)}`);

// 소숫점 자리 올림 Math.ceil(data);
console.log(`ceil: ${Math.ceil(3.14)}`);

// 소숫점 자리 내림 Math.floor(data);
console.log(`floor: ${Math.floor(3.14)}`);

// 소숫점 자리 반올림 Math.round(data);
console.log(`round: ${Math.round(3.14)}`);
console.log(`round: ${Math.round(3.54)}`);

// 0 ~ 1 사이의 난수 출력
console.log(`random: ${Math.random()}`);

// 0 ~ 9 사이의 정수 출력
console.log(Math.floor(Math.random() * 10));
