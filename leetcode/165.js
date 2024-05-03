/**
 * https://leetcode.com/problems/compare-version-numbers/description/
 */
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  let i = 0;
  while (true) {
    let v1 = Number(version1.split(".")[i]);
    let v2 = Number(version2.split(".")[i]);

    if (isNaN(v1) && isNaN(v2)) return 0;

    v1 = v1 || 0;
    v2 = v2 || 0;

    if (v1 > v2) return 1;
    else if (v1 < v2) return -1;
    else i++;
  }
};

module.exports = compareVersion;
