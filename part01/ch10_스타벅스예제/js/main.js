"use strict";
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", () => {
  // element.focus() element에 강제로 focus를 해준다.
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", () => {
  // element.classList.add('className'); className을 가진 클래스를 추가 하겠다.
  searchEl.classList.add("focused");
  // element.setAttribute("html속성명", 'html속성값'); element의 html 속성값을 추가할 수 있다.
  searchInputEl.setAttribute("placeholder", "통합검색");
});

// blur <=> focus focusOut이 된다면, cb를 실행
searchInputEl.addEventListener("blur", () => {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

const badgeEl = document.querySelector("header .badges");

// _.throttle(cb, 000ms) -> lodash module안에 있는 기능 제공. cb함수를 300ms에 한번씩 호출한다.
// scorll 의 경우 많이 cb를 호출하게 되므로 프로그램이 버벅거릴 수 있다. (프로그램이 무거졌을 경우)
window.addEventListener(
  "scroll",
  _.throttle(() => {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      // hidden badge
      // gsap.to(요소, 지속시간(sec), {옵션}); -> 눈에서만 안보이게 한다.
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
    } else {
      // visible badge
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300)
);

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach((fadeEl, index) => {
  // gsap.to(요소, 지속시간(sec), {옵션});
  gsap.to(fadeEl, 1, {
    // 각각의 fadeEl을 0.7을 기준으로 delay시킨다. 0.7 1.4 2.1 2.8
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});
