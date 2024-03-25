/**
 * https://leetcode.com/problems/determine-if-two-strings-are-close/description
 *
 * 1) 존재하는 알파벳 종류가 같아야함 → 존재하는 알파벳끼리 변경 가능.
 * 2) 단어 길이 다른 경우 무조건 실패
 */
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false;

  let word1Cnt = {};
  word1.split("").forEach((char) => {
    word1Cnt[char] = word1Cnt[char] ? ++word1Cnt[char] : 1;
  });

  let word2Cnt = {};
  word2.split("").forEach((char) => {
    word2Cnt[char] = word2Cnt[char] ? ++word2Cnt[char] : 1;
  });

  let word2Arr = Object.values(word2Cnt);
  for (let [char, val] of Object.entries(word1Cnt)) {
    if (!word2Cnt[char]) return false; // 존재하지 않는 알파벳인 경우

    // 알파벳 상관 없이 반복 횟수가 같은 경우
    const index = word2Arr.indexOf(val);
    if (index < 0) return false; // 같은 횟수의 알파벳이 없는 경우
    else word2Arr.splice(index, 1);
  }
  return true;
};

module.exports = closeStrings;
