const str = `
010-1234-5678
thekkojae@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd9
http://localhost:1234
hxyp
동해물과_백두산이 마르고 닳도록
`;

const regexp = /[fox]/g;
console.log(str.match(regexp));

// [0-9]{1,} : 숫자 1개 이상 연속되는 문자를 모두 찾아준다.
const regexp1 = /[0-9]{1,}/g;
console.log(str.match(regexp1));

// [가-힣]{1,} : 한글 1개 이상 연속되는 문자를 모두 찾아준다.
const regexp2 = /[가-힣]{1,}/g;
console.log(str.match(regexp2));

const regexp3 = /\w/g;
console.log(str.match(regexp3));

const regexp4 = /\b/g;
console.log(str.match(regexp4));

// f로 시작하는 모든 단어를 찾아준다.
const regexp5 = /\bf\w{1,}\b/g;
console.log(str.match(regexp5));

const regexp6 = /\d{1,}/g;
console.log(str.match(regexp6));

const h = `  the hello  world   !

`;

const regexp7 = /\s/g;
console.log(h.replace(regexp7, ""));

const str2 = `
010-1234-5678
thekkojae@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`;

// .{1,}(?=@) : @ 문자 앞쪽에 있는 모든 문자를 일치 시킨다.
const regexp8 = /.{1,}(?=@)/g;
console.log(str2.match(regexp8));

// (?<=@).{1,} : @ 문자 뒤쪽에 있는 모든 문자를 일치 시킨다.
const regexp9 = /(?<=@).{1,}/g;
console.log(str2.match(regexp9));
