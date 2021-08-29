const str = `
010-1234-5678
thekkojae@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
hxyp
`;

const regexp = /d$/gm;
console.log(str.match(regexp));

const regexp1 = /^t/gim;
console.log(str.match(regexp1));

// . : 모든 문자를 의미
const regexp2 = /h..p/g;
console.log(str.match(regexp2));

// | :  A or B A 또는 B를 배열로 반환
const regexp3 = /fox|dog/g;
console.log(str.match(regexp3));

// ? : s가 있을 수도 없을 수도 있다. 둘 다 모두 찾아준다.
const regexp4 = /https?/g;
console.log(str.match(regexp4));

// d{2} : d가 2번 연속으로 일치하는 문자를 모두 찾아준다.
const regexp5 = /d{2}/g;
console.log(str.match(regexp5));

// d{2,} : d가 2번 이상 연속으로 일치하는 문자를 모두 찾아준다.
const regexp6 = /d{2,}/g;
console.log(str.match(regexp6));

// d{2,3} : d가 2~3개 연속 일치하는 문자를 모두 찾아준다.
const regexp7 = /d{2,3}/g;
console.log(str.match(regexp7));

// \w : 숫자를 포함한 영어 알파벳을 의미한다.
const regexp8 = /\w{2,3}/g;
console.log(str.match(regexp8));

// \b : 숫자를 포함한 영어 알파벳이 아닌 경우를 경계를 삼는다. 공백, 특수기호 등등
const regexp9 = /\b\w{2,3}\b/g;
console.log(str.match(regexp9));
