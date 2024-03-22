/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/133499
 */
function solution(babbling) {
  let answer = 0;

  babbling.forEach((word) => {
    let prev = undefined; // 직전 단어

    while (true) {
      const matched =
        word.match(new RegExp("^aya")) ||
        word.match(new RegExp("^ye")) ||
        word.match(new RegExp("^woo")) ||
        word.match(new RegExp("^ma"));
      if (!matched) break;

      let cur = matched[0]; // 매치된 단어
      if (prev && cur === prev) break; // 연속인 경우

      word = word.slice(matched[0].length);
      prev = cur;

      if (word.length === 0) {
        answer++;
        break;
      }
    }
  });

  return answer;
}

module.exports = solution;
