/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12977
 */
function solution(nums) {
  let answer = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        if (isPrimeNumber(sum)) {
          answer++;
        }
      }
    }
  }
  return answer;
}

// 소수 판별 함수
function isPrimeNumber(num) {
  for (let i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

module.exports = solution;
