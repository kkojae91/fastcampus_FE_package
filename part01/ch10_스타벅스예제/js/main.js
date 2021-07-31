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
    // console.log(window.scrollY);
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

// new Swiper('선택자', {옵션})
new Swiper(".notice-line .swiper-container", {
  // 방향은 수직
  direction: "vertical",
  // 자동재생
  autoplay: true,
  // 반복재생
  loop: true,
});

new Swiper(".promotion .swiper-container", {
  // direction: "horizontal", default
  // 한번에 보여줄 slide 개수 지정 default = 1
  slidesPerView: 3,
  // slide 사이의 여백을 10px로 지정
  spaceBetween: 10,
  // 첫번째 슬라이드를 센터에서 시작하겠다고 지정
  centeredSlides: true,
  // 반복 재생
  loop: true,
  // 자동 재생
  autoplay: {
    // optional default 3000ms "ms"는 생략
    delay: 5000,
  },
  pagination: {
    // element selector pagination
    el: ".promotion .swiper-pagination",
    // 사용자의 페이지 번호 요소 제어 여부
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});
