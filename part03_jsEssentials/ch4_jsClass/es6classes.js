// ES6 Classes

const kkojae = {
  name: "kkojae",
  // ": function"부분을 생략할 수 있다.
  normal() {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  },
};

kkojae.normal();
kkojae.arrow();

// function User(first, last) {
//   this.firstName = first;
//   this.lastName = last;
// }

// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

class User {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const kkojae2 = new User("jaejeung", "Ko");
const amy = new User("Amy", "Clarke");
const neo = new User("Neo", "Smith");

console.log(kkojae2);
console.log(amy.getFullName());
console.log(neo.getFullName());
