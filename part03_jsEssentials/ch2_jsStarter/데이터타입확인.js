import getType from "./getType";

// typeof
console.log(typeof "Hello World!");
console.log(typeof 123);
console.log(typeof true);
// undefined는 의도하지 않게 비어져있는 경우
console.log(typeof undefined);
// null은 의도에 의해 비어진 경우
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);

// 외부에서 import 해온 getType 함수 활용
console.log(getType(123)); // Number
console.log(getType(false)); // Boolean
console.log(getType(null)); // Null
console.log(getType({})); // Object
console.log(getType([])); // Array
