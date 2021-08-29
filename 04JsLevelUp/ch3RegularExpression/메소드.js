let str = `
010-1234-5678
thekkojae@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`;

// test메소드를 사용할 경우 값이 존재하는지 Boolean 값을 반환한다.
const regexp = /fox/gi;
console.log(regexp.test(str));

// replace함수를 사용하면 원본을 손상시키지 않는다.
str = str.replace(regexp, "AAA");
console.log(str);

const regexp2 = /jaejueng/gi;
console.log(regexp.test(regexp2));
