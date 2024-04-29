/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function (colors, neededTime) {
  let answer = 0;
  let left = 0;
  let right = 0;
  let stack = [];
  while (left < colors.length) {
    if (colors[left] === colors[right]) {
      // 같은 글자면 stack 에 추가
      stack.push(right);
    } else {
      if (stack.length >= 2) {
        console.log(stack);
        // 가장 큰 숫자 1개 남기고 모두 제거
        const tmpArr = neededTime.slice(stack[0], stack[stack.length - 1] + 1);
        const maxIndex = tmpArr.findIndex(
          (value) => value === Math.max(...tmpArr)
        );
        answer += tmpArr.reduce((acc, cur, index) => {
          if (maxIndex !== index) return acc + cur;
          else return acc;
        }, 0);
      }

      stack = [right];
      left = right;
    }
    right++;
  }
  return answer;
};

module.exports = minCost;
