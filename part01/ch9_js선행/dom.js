// HTML 요소(Element) 1개 검색/찾기
let boxEl = document.querySelector(".box");
console.log(boxEl);

// HTML 요소에 적용할 수 있는 메소드!
// boxEl.addEventListener();

// 인수(Arguments)를 추가 가능!
// boxEl.addEventListener(1, 2);

// 1- 이벤트(event, 상황);
// boxEl.addEventListener("click", 2);

// 2 - 핸들러(Handler, 실행할 함수)
boxEl.addEventListener("click", () => {
  console.log("Click@");
  boxEl.classList.add("active");
  console.log(boxEl.classList.contains("active"));
  boxEl.classList.remove("active");
  console.log(boxEl.classList.contains("active"));
});

// 요소의 클래스 정보 객체 활용!
// 요소.classList.add('클래스명') -> 해당하는 클래스명을 해당하는 요소에 추가한다.
// boxEl.classList.add("active");
// 요소.classList.contains("클래스명") -> 해당하는 클래스가 있는지 확인 후 boolean값을 리턴
// let isContains = boxEl.classList.contains("active");
// console.log(isContains);

// 요소.classList.remove("클래스명") -> 해당하는 클래스명을 해당하는 요소에서 제거한다.
// boxEl.classList.remove("active");
// isContains = boxEl.classList.contains("active");
// console.log(isContains);

// HTML 요소(Element) 모두 검색/찾기
const boxEls = document.querySelectorAll(".box");
console.log(boxEls);

// 찾은 요소들 반복해서 함수 실행!
// 익명 함수를 인수로 추가!
// boxEls.forEach(() => {});

// 첫 번째 매개변수(boxEl): 반복 중인 요소.
// 두 번째 매개변수(index): 반복 중인 번호
// boxEls.forEach((boxEl, index) => {});

// 출력!
boxEls.forEach((boxEl, index) => {
  boxEl.classList.add(`order-${index + 1}`);
  console.log(index, boxEl);
});

// Getter, 값을 얻는 용도
console.log(boxEl.textContent);

// Setter, 값을 지정하는 용도
boxEl.textContent = "kkojae!";
console.log(boxEl.textContent);
