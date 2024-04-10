/**
 * https://leetcode.com/problems/reveal-cards-in-increasing-order/description/
 */
var deckRevealedIncreasing = function (deck) {
  deck.sort((a, b) => a - b);

  const record = new Array(deck.length);

  let skip = false;
  let i = 0,
    j = 0;
  while (i < deck.length) {
    if (record[j] === undefined) {
      if (!skip) {
        record[j] = deck[i];
        i++;
      }
      skip = !skip;
    }
    j = (j + 1) % deck.length;
  }

  return record;
};

module.exports = deckRevealedIncreasing;

// // 더 괜찮은 방법 (큐, 스택 사용)
// const deckRevealedIncreasing = (deck) => {
//   deck.sort((a, b) => a - b);
//   let answer = [];

//   answer.push(deck.pop());

//   while (deck.length) {
//     answer.unshift(answer.pop());
//     answer.unshift(deck.pop());
//   }
//   return answer;
// };
