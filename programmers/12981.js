/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12981
 */
function solution(n, words) {
  let usedWords = [words[0]]; // 사용한 단어 리스트
  let index = 1; // 차례 번호

  while (words.length > index) {
    const word = words[index]; // 현재 단어
    const beforeWord = usedWords.at(-1); // 이전 단어

    // 단어 안맞는 경우 또는 이미 사용한 단어인 경우
    if (beforeWord.at(-1) !== word.at(0) || usedWords.indexOf(word) > -1) {
      return [(index % n) + 1, Math.ceil((index + 1) / n)];
    }
    usedWords.push(word);
    index++;
  }
  return [0, 0];
}

module.exports = solution;
