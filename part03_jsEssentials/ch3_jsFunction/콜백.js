// Callback(콜백)
// 함수의 인수로 사용되는 함수
// 실행 위치를 보장하는 함수로 많이 사용된다.
// setTimeout(함수, ms)

function timeout(cb) {
  setTimeout(() => {
    console.log("kkojae!");
    cb();
  }, 3000);
}
timeout(() => {
  console.log("Done!");
});
