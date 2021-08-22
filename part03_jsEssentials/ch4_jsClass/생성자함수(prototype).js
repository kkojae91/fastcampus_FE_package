const kkojae = {
  firstName: "jaejeung",
  lastName: "Ko",
  // this는 함수가 포함되어 있는 객체 데이터 자체를 의미함,
  // this를 kkojae로 바꾸어도 문제 없이 코드가 동작 -> kkojae라는 객체 변수는 언제든 변할 수 있기 때문에, this로 사용해주는게 좋다.
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(kkojae.getFullName());

const amy = {
  firstName: "Amy",
  lastName: "Clarke",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(amy.getFullName());

const neo = {
  firstName: "Neo",
  lastName: "Smith",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(neo.getFullName());

function User(first, last) {
  this.firstName = first;
  this.lastName = last;
}

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const kkojae2 = new User("jaejeung", "Ko");
const amy2 = new User("Amy", "Clarke");
const neo2 = new User("Neo", "Smith");
console.log(kkojae2);
console.log(kkojae2.getFullName());
console.log(amy2);
console.log(amy2.getFullName());
console.log(neo2);
console.log(neo2.getFullName());
