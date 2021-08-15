/*
javascript에서 제공하는 typeof 함수를 사용해도 되지만, 
불분명하게 구분하는 경우가 많으니 아래와 같이 사용하게 되면 조금 더 명확한 타입을 구분할 수 있습니다.
*/
export default function getType(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}
