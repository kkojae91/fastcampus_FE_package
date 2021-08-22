// 즉시 실행 함수
// IIFE, Immediately Invoked Function Expression

const a = 7;

function double() {
  console.log(a * 2);
}

double();

// 햠수를 값으로 표현한 다음 바로 실행 (function () {})();
// 이게 가능한 이유는 익명함수를 변수에 담을 수 있기 때문
(function () {
  console.log(a * 2);
})();

(function () {
  console.log(a * 2);
})();
