// From 'node_modules!
// npm install lodash 로 node_modules에 설치하면 경로를 설정하지 않고 사용할 수 있다.
import _ from "lodash";
// From getType.js
import getType from "./getType";
// From getRandom.js
// user라는 함수를 꺼내올때 변수명이 마음에 들지 않을 경우 as를 사용하여 변수명을 변경할 수 있다.
// import { random, user as kkojae } from "./getRandom";
// 모듈안의 모든 내용을 한번에 불러오고, 별칭을 R로 지정한다.
import * as R from "./getRandom";

console.log(_.camelCase("The Hello World!"));
console.log(getType([1, 2, 3]));
console.log(R.random(), R.random());
console.log(R.user);

// export default 를 사용할 경우는 익명 함수를 사용해도 문제 없다.
// import 역시 이름을 다른 이름을 사용해서 사용할 수 있다.
// export default를 사용할 경우 하나의 함수만 내보낼 수 있다.
// 하나의 모듈에서 하나의 함수만 내보내면 될 경우 export default를 사용한다.

// export 를 사용할 경우 익명함수를 사용할 수 없다.
// import 할 경우에도 {} 중괄호 사이에 동일한 함수명을 입력해주어야 정상적으로 동작한다.
// export 를 사용할 경우 많은 함수 객체 등등 모두 export 할 수 있다.
// 하나의 모듈에서 둘 이상의 함수를 내보내야할 경우 export를 사용한다.
