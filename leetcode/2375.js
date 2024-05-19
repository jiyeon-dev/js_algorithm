/**
 * https://leetcode.com/problems/construct-smallest-number-from-di-string/
 */
/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function (pattern) {
  pattern = pattern.split("");
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9].slice(0, pattern.length + 1);

  let start = pattern.lastIndexOf("D"),
    end = pattern.lastIndexOf("D");

  while (start > -2 && end !== -1) {
    if (pattern[start] === "I" || start === -1) {
      const newArr = numbers.splice(start + 1, end - start + 1).reverse();
      numbers.splice(start + 1, 0, ...newArr);
      end = pattern.lastIndexOf("D", start);
    }

    start--;
  }

  return numbers.join("");
};

module.exports = smallestNumber;
