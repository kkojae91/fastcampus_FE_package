const str = `
010-1234-5678
thekkojae@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`;

// 옵션이 없을 경우 문장의 가장 첫 the 만 찾아준다.
const regexp = new RegExp("the", "");
console.log(str.match(regexp));

// 옵션에 g를 넣어줄 경우 global 전체 문장에 있는 the를 모두 찾아준다.
const regexp1 = new RegExp("the", "g");
console.log(str.match(regexp1));

// 옵션부분에 i를 추가 하면 대문자 소문자 구분하지 않고 찾아준다.
const regexp2 = new RegExp("the", "gi");
console.log(str.match(regexp2));

// 리터럴 방식
const regexp3 = /the/gi;
console.log(str.match(regexp3));
