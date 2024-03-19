/**
 * https://leetcode.com/problems/task-scheduler/
 */
var leastInterval = function (tasks, n) {
  // 테스크 객체 생성
  const obj = tasks.reduce((acc, cur) => {
    acc[cur] = acc[cur] ? ++acc[cur] : 1;
    return acc;
  }, {});

  const max = Math.max(...Object.values(obj)); // 가장 많은 테스트 수
  const maxCnt = Object.values(obj).filter((val) => val === max).length; // 가장 많은 테스크를 갖고 있는 테스크 수

  if (Object.values(obj).length <= n) {
    return (max - 1) * (n + 1) + maxCnt;
  } else {
    return Math.max(n * (max - 1) + max + maxCnt - 1, tasks.length);
  }
};

module.exports = leastInterval;
