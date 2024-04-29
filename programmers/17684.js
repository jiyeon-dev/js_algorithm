/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/17684
 */
function solution(msg) {
  const answer = [];
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const dictionary = {};

  alphabet.split("").forEach((value, i) => (dictionary[value] = i + 1));
  let lastNumber = alphabet.length;

  let i = 0;
  while (i < msg.length) {
    let w = msg[i];
    let c;

    // 두 글자 합쳐서 디비에 존재하는지 체크
    let next = i + 1;
    while (next < msg.length) {
      const tmp = msg.substring(i, next + 1);

      // 사전에 있는 단어인지 확인
      if (dictionary[tmp]) {
        w = tmp;
        next++;
      } else {
        c = msg[next];
        break;
      }
    }

    // 출력
    answer.push(dictionary[w]);

    // 사전 추가
    lastNumber++;
    dictionary[w + c] = lastNumber;

    i = next;
  }

  return answer;
}

module.exports = solution;
