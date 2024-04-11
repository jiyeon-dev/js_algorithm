/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42839
 */
function solution(numbers) {
  // 만들 수 있는 수 리스트
  let numberArr = [];
  const getPermutations = (arr, num) => {
    const results = [];

    if (num === 1) return arr.map((v) => v);
    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const permutations = getPermutations(rest, num - 1);
      const attached = permutations.map((v) => `${fixed}${v}`);
      results.push(...attached);
    });

    return results;
  };
  numbers.split("").forEach((_, index, origin) => {
    numberArr.push(...getPermutations(origin, index + 1));
  });

  // 중복 제거
  const numberSet = new Set();
  numberArr.forEach((num) => numberSet.add(+num));

  // 소수 판별
  function isPrime(num) {
    if (num < 2) return false;
    if (num > 2 && num % 2 === 0) return false; // 2도 소수다...
    for (let x = 3; x * x <= num; x += 2) {
      if (num % x === 0) return false;
    }
    return true;
  }

  let count = 0;
  numberSet.forEach((n) => {
    let num = +n;
    if (isPrime(num)) count++;
  });
  return count;
}

module.exports = solution;
