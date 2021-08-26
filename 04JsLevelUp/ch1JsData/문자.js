// JS Data

// String: "", '', ``
// Number
// Boolean: true, false
// undefined
// null
// Array: []
// Object: {}

// String.prototype.indexOf();
const result = "Hello world!".indexOf("world");
console.log(result); // 6
// -1이 아닐 경우 문자 데이터가 존재!, -1일 경우 문자 데이터가 존재하지 않는다.
console.log(result !== -1);

const result2 = "Hello world!".indexOf("kkojae");
console.log(result2); // -1 (일치하는 값이 없을 경우 -1이 반환 된다.);

const str = "0123";
console.log(str); // '0123'
console.log(str.length); // 4
console.log("0123".length); //length를 활용하여 문자열의 길이를 파악할 수 있다.

const str2 = "Hello world!";
// "".slice(beginIndex, endIndex)
// endIndex는 종료되는 인덱스 그 직전까지만 추출된다.
console.log(str2.slice(0, 3));
console.log(str2.slice(6, 11));

const str3 = "Hello world!";
// "".replace(findString, replaceString);
console.log(str3.replace("world", "kkojae"));
console.log(str3.replace(" world!", ""));

const str4 = "kkojae@gmail.com";
// 정규표현식에서 조금 더 자세히 배우자!
console.log(str4.match(/.+(?=@)/)[0]);

const str5 = "        Hello world  ";
// "".trim() 앞뒤의 불필요한 공백을 제거 해준다.
console.log(str5.trim());
