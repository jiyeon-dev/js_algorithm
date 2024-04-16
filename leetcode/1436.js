/**
 * https://leetcode.com/problems/destination-city/description/
 */
/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  let startCity = new Set();
  paths.forEach(([start, _]) => {
    startCity.add(start);
  });

  for (let [_, end] of paths) {
    if (!startCity.has(end)) return end;
  }

  return "";
};

module.exports = destCity;
