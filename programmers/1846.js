/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/1846
 */
function solution(nums) {
  const mid = nums.length / 2;
  const set = new Set();
  nums.forEach((num) => set.add(num));

  if (set.size > mid) console.log(mid);
  else console.log(set.size);
  if (set.size > mid) return mid;
  else return set.size;
}

module.exports = solution;
