// 데이터 불변성 (Immutability)
// 원시 데이터: String, Number, Boolean, undefined, null

let a = 1;
let b = 4;
console.log(a, b, a === b);
b = a;
console.log(a, b, a === b);
a = 7;
console.log(a, b, a === b);
let c = 1;
console.log(b, c, b === c);

// 참조형 데이터에는 불변성이 없다.
// 참조형 데이터: Object, Array, Function
let a1 = { k: 1 };
let b1 = { k: 1 };
console.log(a1, b1, a1 === b1);

a1.k = 7;
// 같은 메모리 주소를 바라볼 수 있게 만든다. 참조!
b1 = a1;
console.log(a1, b1, a1 === b1);

// a1의 변수의 값만 변경하더라도 같은 메모리를 참조하고 있기때문에 모두 변경된다.
a1.k = 2;
console.log(a1, b1, a1 === b1);

// b1의 메모리 주소를 c1도 같은 메모리 주소를 바라보게 된다. 참조!!
let c1 = b1;
console.log(a1, b1, c1, a1 === c1);
// a1의 변수의 값만 변경하더라도 같은 메모리를 참조하고 있기때문에 모두 변경된다.
a1.k = 9;
console.log(a1, b1, c1, a1 === b1);
