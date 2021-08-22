// this
// 일발(normal) 함수는 호출 위치에 따라 this 정의! (함수가 호출되는 곳에서 객체를 지칭)
// 화살표(arrow) 함수는 자신이 선언된 함수 범위에서 this 정의! (자신을 감싸주는 함수 범위의 객체를 지칭)

const kkojae = {
  name: "kkojae",
  normal: function () {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  },
};

kkojae.normal();
kkojae.arrow();

const amy = {
  name: "Amy",
  normal: kkojae.normal,
  arrow: kkojae.arrow,
};

amy.normal();
amy.arrow();

function User(name) {
  this.name = name;
}

User.prototype.normal = function () {
  console.log(this.name);
};

User.prototype.arrow = () => {
  console.log(this.name);
};

const kkojae2 = new User("kkojae");
kkojae2.normal();
kkojae2.arrow();

const timer = {
  name: "kkojae!!",
  timeout: function () {
    // this는 setTimeout 내부 어딘가.
    setTimeout(function () {
      console.log(this.name);
    }, 2000);

    // this는 timer객체 자체
    setTimeout(() => {
      console.log(this.name);
    }, 2000);
  },
};

timer.timeout();
