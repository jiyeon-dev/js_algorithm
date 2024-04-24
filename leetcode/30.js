/**
 * https://leetcode.com/problems/substring-with-concatenation-of-all-words/description/
 */
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  const answer = [];

  // 전체 words 길이
  const wordLength = words[0].length;
  const wordsLength = wordLength * words.length;

  // map
  const map = {};
  words.forEach((word) => {
    if (!map[word]) map[word] = 1;
    else map[word] += 1;
  });

  for (let start = 0; start <= s.length - wordsLength; start++) {
    const visited = {};
    let flag = true;
    for (let i = start; i < wordsLength + start; i = i + wordLength) {
      const subStr = s.substring(i, i + wordLength);
      if (
        words.includes(subStr) &&
        (!visited[subStr] || (visited[subStr] && map[subStr] > visited[subStr]))
      )
        visited[subStr] = visited[subStr] ? visited[subStr] + 1 : 1;
      else {
        flag = false;
        break;
      }
    }
    if (flag) answer.push(start);
  }

  return answer;
};

module.exports = findSubstring;

console.log(
  findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "good"])
);
