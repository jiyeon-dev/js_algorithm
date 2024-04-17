/**
 * https://leetcode.com/problems/find-players-with-zero-or-one-losses/description/
 */
/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
  const users = new Set();
  const losers = {};

  matches.forEach((match) => {
    const [winner, loser] = match;
    losers[loser] = losers[loser] ? losers[loser] + 1 : 1;
    users.add(loser);
    users.add(winner);
  });
  let loseOnce = Object.entries(losers).reduce((acc, [key, value]) => {
    if (value === 1) acc.push(+key);
    users.delete(+key);
    return acc;
  }, []);

  return [Array.from(users).sort((a, b) => a - b), loseOnce];
};

module.exports = findWinners;
