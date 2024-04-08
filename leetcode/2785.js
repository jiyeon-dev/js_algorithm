/**
 * https://leetcode.com/problems/sort-vowels-in-a-string/description
 *
 * 모음인 경우에만 ASCII 코드 값 비교해서 순서대로 위치하도록 변경
 */
var sortVowels = function (s) {
  const str = [];
  const vowels = []; // 모음 저장
  const indexes = []; // 모음 인덱스 저장

  s.split("").forEach((char, i) => {
    if (["a", "e", "i", "o", "u"].includes(char.toLowerCase())) {
      vowels.push(char.charCodeAt());
      indexes.push(i);
    } else {
      str.push(char);
    }
  });

  indexes.sort((a, b) => a - b);
  vowels.sort((a, b) => a - b);

  vowels.forEach((ascii, i) => {
    const char = String.fromCharCode(ascii);
    str.splice(indexes[i], 0, char);
  });

  return str.join("");
};

module.exports = sortVowels;
