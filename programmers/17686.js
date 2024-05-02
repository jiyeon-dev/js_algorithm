/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/17686
 * 정규식
 * https://velog.io/@sso/%EC%A0%95%EA%B7%9C%ED%91%9C%ED%98%84%EC%8B%9D-Regular-Expressions
 */
function solution(files) {
  const answer = [];
  const regex = /([^\d]*)(\d*)([^\d]*)/;

  let i = 0;
  while (i < files.length) {
    const cur = files[i];
    let [_, curHead, curNumber, curTail] = cur.match(regex);
    curHead = curHead.toLowerCase();
    curNumber = Number(curNumber);
    curTail = curTail.trim();

    if (answer.length === 0) {
      answer.push(cur);
    } else {
      // 비교
      for (let j = answer.length - 1; j >= 0; j--) {
        let [_, head, number, tail] = answer[j].match(regex);
        head = head.toLowerCase();
        number = Number(number);
        tail = tail.trim();

        if (
          curHead > head ||
          (curHead === head && curNumber > number) ||
          (curHead === head && curNumber === number)
        ) {
          answer.splice(j + 1, 0, cur);
          break;
        }
      }

      if (answer.length === i) {
        answer.unshift(cur);
      }
    }

    i++;
  }

  return answer;
}

module.exports = solution;
