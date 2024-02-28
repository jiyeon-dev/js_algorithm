/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/258712
 *
 * * const matrix = new Array(friends.length).fill([0, 0, 0, 0]);  // 얕은 복사되어서 사용 불가
 */
function solution(friends, gifts) {
  // 선물 주고 받은 결과 중첩 배열
  const matrix = friends.map((_) => friends.map((_) => 0));
  gifts.map((row) => {
    const [a, b] = row.split(" ");
    matrix[friends.indexOf(a)][friends.indexOf(b)] += 1;
  });

  // 선물지수
  const numbers = matrix.map((user, index) => {
    const send = user.reduce((acc, cur) => acc + cur, 0);
    const get = matrix.reduce((acc, cur) => acc + cur[index], 0);
    return send - get;
  });

  let max = 0; // 가장 많이 받는 사람 선물 개수
  matrix.map((user, i) => {
    let count = 0; // 다음달 받을 선물 수
    user.forEach((send, j) => {
      if (i !== j) {
        const get = matrix[j][i];
        // 서로 선물을 주고 받았는데 내가 친구보다 많이 준 경우 + 1
        if (send > get) count += 1;
        // 선물을 주고 받은 기록이 없거나 같은 경우, 선물 지수 더 큰 사람 + 1
        else if (send === get && numbers[i] > numbers[j]) count += 1;
      }
    });
    max = count > max ? count : max;
  });

  return max;
}

module.exports = solution;
