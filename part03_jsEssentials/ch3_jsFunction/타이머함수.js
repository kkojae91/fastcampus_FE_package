// 타이머 함수
// setTimeout(함수, ms) : 일정시간 후 함수 실행
// setInterval(함수, ms) : 일정시간 간격 마다 함수 실행
// clearTimeout() : 설정된 Timeout 함수 종료
// clearInterval() : 설정된 Interval 함수 종료

const timeoutTimer = setTimeout(() => {
  console.log("kkojae!");
}, 3000);

const intervalTimer = setInterval(() => {
  console.log("kkojae!");
}, 3000);

const h1El = document.querySelector("h1");
h1El.addEventListener("click", () => {
  // clearTimeout(timeoutTimer);
  clearInterval(intervalTimer);
});
