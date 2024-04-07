/**
 * https://leetcode.com/problems/valid-parenthesis-string/description
 *
 * 괄호 짝이 맞는지 체크
 * - *는 빈 값이거나 ( 또는 )가 될 수 있음
 */
var checkValidString = function (s) {
  let openCount = []; // ( 인덱스 리스트
  let asteriskCount = []; // * 인덱스 리스트

  // 반복문을 돌면서 ) 가 나오면 리스트 pop
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") openCount.push(i);
    else if (s[i] === "*") asteriskCount.push(i);
    else if (s[i] === ")") {
      if (openCount.length > 0) openCount.pop();
      else if (asteriskCount.length > 0) asteriskCount.pop();
      else return false; // ( , * 둘다 없는 경우 실패
    }
  }

  // 남은 ( , *의 짝 맞는지 체크
  while (openCount.length > 0) {
    // 괄호는 남았는데 * 가 없는 경우
    if (asteriskCount.length === 0) return false;

    const open = openCount.pop();
    const asterisk = asteriskCount.pop();

    // ( 뒤에 * 가 없는 경우 실패
    if (open > asterisk) return false;
  }

  return true;
};

module.exports = checkValidString;
