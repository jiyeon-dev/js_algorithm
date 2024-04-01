/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42840
 */
function solution(answers) {
  const user1 = [1, 2, 3, 4, 5];
  const user2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const user3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count1 = 0,
    count2 = 0,
    count3 = 0;

  answers.forEach((answer, i) => {
    if (user1[i % 5] === answer) count1++;
    if (user2[i % 8] === answer) count2++;
    if (user3[i % 10] === answer) count3++;
  });

  return [count1, count2, count3].reduce((acc, cur, index) => {
    if (cur === Math.max(count1, count2, count3)) acc.push(index + 1);
    return acc;
  }, []);
}

module.exports = solution;
