/**
 * https://leetcode.com/problems/integer-to-roman/description/
 */
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const units = num % 10;
  const tens = ((num % 100) - (num % 10)) / 10;
  const hundreds = ((num % 1000) - (num % 100)) / 100;
  const thousands = ((num % 10000) - (num % 1000)) / 1000;

  let answer = "";
  answer += "M".repeat(thousands);

  if (hundreds > 0) {
    let remainder = hundreds % 5;
    let quotient = Math.floor(hundreds / 5);
    if (hundreds === 4) answer += "CD";
    else if (hundreds === 9) answer += "CM";
    else answer += "D".repeat(quotient) + "C".repeat(remainder);
  }

  if (tens > 0) {
    let remainder = tens % 5;
    let quotient = Math.floor(tens / 5);
    if (tens === 4) answer += "XL";
    else if (tens === 9) answer += "XC";
    else answer += "L".repeat(quotient) + "X".repeat(remainder);
  }

  if (units > 0) {
    let remainder = units % 5;
    let quotient = Math.floor(units / 5);
    if (units === 4) answer += "IV";
    else if (units === 9) answer += "IX";
    else answer += "V".repeat(quotient) + "I".repeat(remainder);
  }

  return answer;
};

module.exports = intToRoman;
