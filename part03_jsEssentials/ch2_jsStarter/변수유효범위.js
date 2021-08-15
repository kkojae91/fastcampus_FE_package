// 변수 유효범위 (Variable Scope)
// var let const
// let 과 const는 블록레벨의 유효 범위를 가진다. {유효범위}
// var는 함수레벨의 유효 범위를 가진다. (우리가 의도하지 않는 범위에서 변수가 사용될 수 있다.)
// 메모리 누수 또한 존재할 수 있다.

function scope() {
  console.log(a);
  if (true) {
    console.log(a);
    const a = 123;
    console.log(a);
  }
  console.log(a);
}

scope();
