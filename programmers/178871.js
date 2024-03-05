/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/178871
 *
 * [중요1] indexOf로 선수를 찾으면 시간초과 발생!
 * 이유)
 *   - indexOf는 순차 검색이라 O(n)의 복잡도를 갖기 때문에 길이가 길수록 성능이 저하됨.
 *   - 객체는 키-값 쌍의 해시 테이블과 유사한 방식으로 관리되기 때문에 O(1)의 복잡도를 갖음.
 * 따라서 배열이 크고 여러번 검색할수록 객체를 사용하는 것이 성능상 이점을 가질 수 있음.
 *
 * [중요2] swap할 시 splice보단 temp(임시변수)를 이용한 swap방식을 이용하는 것이 좋다.
 * 이유)
 *   - spice는 배열에서 일부를 제거하고 새로운 요소를 삽입하는 방식이다.
 *   - 따라서 내부적으로는 `배열의 재정렬`이 발생할 수 있다.
 *   - 임시 변수를 이용한 변경은 두 변수의 값을 직접 교환하기 때문에 더 빠르다.
 */
function solution(players, callings) {
  // players 를 객체에 담기
  let playersObj = {};
  players.map((e, i) => (playersObj[e] = i));

  callings.map((player) => {
    const curRank = playersObj[player]; // 현재 등수
    const tmp = players[curRank - 1]; // 앞에 있던 선수

    // 순서 swap
    players[curRank] = tmp;
    players[curRank - 1] = player;

    // 객체 등수 변경
    playersObj[player] = curRank - 1;
    playersObj[tmp] = curRank;
  });

  return players;
}

// 시도 1) 9,10,11,12,13 시간초과
// function solution(players, callings) {
//   callings.map((player) => {
//     const curRank = players.indexOf(player);
//     players.splice(curRank, 1);
//     players.splice(curRank - 1, 0, player);
//   });
//   return players;
// }

// 시도 2) 10,11,12,13 시간초과
// function solution(players, callings) {
//   callings.map((player) => {
//     const curRank = players.indexOf(player);
//     players[curRank] = players[curRank - 1];
//     players[curRank - 1] = player;
//   });
//   return players;
// }

module.exports = solution;
