import _ from "lodash";

const usersA = [
  { userId: "1", name: "kkojae" },
  { userId: "2", name: "neo" },
];

const usersB = [
  { userId: "1", name: "kkojae" },
  { userId: "3", name: "amy" },
];

const usersC = usersA.concat(usersB);
console.log("concat", usersC);

// 배열데이터가 하나일 경우 사용
// 중복을 제거 _.uniqBy(변수명, '기준')
console.log("uniqBy", _.uniqBy(usersC, "userId"));

// 여러개의 배열 데이터를 concat할 경우
// _.unionBy(변수명, 변수명, '기준')
const usersD = _.unionBy(usersA, usersB, "userId");
console.log("unionBy", usersD);

const users = [
  { userId: "1", name: "kkojae" },
  { userId: "2", name: "neo" },
  { userId: "3", name: "amy" },
  { userId: "4", name: "evan" },
  { userId: "5", name: "lewis" },
];

const foundUser = _.find(users, { name: "amy" });
const foundUserIndex = _.findIndex(users, { name: "amy" });
console.log(foundUser);
console.log(foundUserIndex);

_.remove(users, { name: "kkojae" });
console.log(users);
