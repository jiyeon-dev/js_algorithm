/**
 * https://leetcode.com/problems/arithmetic-subarrays/description/
 */
var checkArithmeticSubarrays = function (nums, l, r) {
  const answer = [];

  l.forEach((left, i) => {
    const subArray = nums.slice(left, r[i] + 1).sort((a, b) => a - b);

    let diff = Math.abs(subArray[0] - subArray[1]);
    let j = 1;
    while (j < subArray.length - 1) {
      const a = subArray[j];
      const b = subArray[j + 1];
      if (Math.abs(a - b) !== diff) {
        answer.push(false);
        break;
      }
      j++;
    }

    if (answer.length !== i + 1) answer.push(true);
  });

  return answer;
};

module.exports = checkArithmeticSubarrays;
