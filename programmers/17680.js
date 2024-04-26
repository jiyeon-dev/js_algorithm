/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/17680
 *
 * LRU 알고리즘
 * - 캐쉬 크기만큼만 저장 가능
 * - 캐쉬 크기 넘은 경우 오랜된 캐쉬 제거 후 새 캐쉬 추가
 * - 이미 있는 캐쉬인 경우 기존 캐쉬 삭제 후 새 캐쉬 추가
 *
 * * 11, 15, 18, 19, 20 - hit인 경우 맨 뒤로 이동 시켜야함.
 */
function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5; // 17번 성공
  const cache = new Array(cacheSize);

  let answer = 0;
  cities.forEach((val) => {
    const city = val.toLowerCase();
    const index = cache.indexOf(city); // cache hit

    if (index > -1) {
      answer += 1;
      cache.splice(index, 1); // 기존 캐쉬 제거
      cache.push(city); // 새 캐쉬 추가
    } else {
      answer += 5;
      if (cache.length === cacheSize) {
        cache.shift(); // 가장 오래된 캐쉬 제거
      }
      cache.push(city);
    }
  });

  return answer;
}

module.exports = solution;
