// 호이스팅 (hoisting);
// 함수 선언부가 유효범위 최상단으로 끌어 올려지는 현상
// 함수 표현식을 사용할 경우는 호이스팅이 일어나지 않는다. (arrow function 역시 호이스팅이 일어나지 않는다.)
// 함수 선언식을 사용할 경우 호이스팅이 일어난다.

const a = 7;

double2();

const double = function () {
  console.log(a * 2);
};

double();

function double2() {
  console.log(a * 2);
}

const double3 = () => console.log(a * 2);

double3();
