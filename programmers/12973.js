/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12973
 *
 * 무조건 O(n)으로 끝내야함. (효율성 체크 부분이 깐깐함...)
 * 맨 아래 처럼 while로 검사하는 경우, O(n + x) 가 되므로 효율성에서 오류 발생함.
 */
function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const str = s[i];
    if (stack.length === 0) stack.push(str);
    else {
      const str2 = stack.pop();
      if (str !== str2) {
        stack.push(str2);
        stack.push(str);
      }
    }
  }
  return stack.length > 0 ? 0 : 1;
}

module.exports = solution;

// // 효율성 실패
// function solution(s) {
//   let i = 0;
//   while (i < s.length - 1) {
//     const s1 = s[i];
//     const s2 = s[i + 1];
//     if (s1 === s2) {
//       s = s.substring(0, i) + s.substring(i + 2, s.length);
//       i--;
//       i = i < 0 ? 0 : i;
//     } else {
//       i++;
//     }
//   }
//   return s.length ? 0 : 1;
// }
