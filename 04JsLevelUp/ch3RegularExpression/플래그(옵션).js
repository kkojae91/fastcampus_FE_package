const str = `
010-1234-5678.
thekkojae@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`;

const regexp = /the/;
console.log(str.match(regexp));

const regexp1 = /the/g;
console.log(str.match(regexp1));

const regexp2 = /the/gi;
console.log(str.match(regexp2));

// 이스케이프 문자
// 특정한 기능으로 동작되는 특수기호를 일반 문자로 해석할 수 있게 바꿔주는 방법 \을 앞에 붙여준다.
// m 플래그를 사용하면 각각의 줄마다! 한 문장 한 문장으로 해석.
// \.$ .으로 끝나는 부분!
const regexp3 = /\.$/gim;
console.log(str.match(regexp3));
