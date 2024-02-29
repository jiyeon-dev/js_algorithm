/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/250137
 */
function solution(bandage, health, attacks) {
  let curHealth = health; // 현재 체력
  let time = 1; // 시간
  let attackStack = 0; // 연속 공격 성공 횟수

  while (attacks.length !== 0) {
    // 몬스터 공격
    if (time === attacks[0][0]) {
      const attack = attacks.shift();
      curHealth -= attack[1];
      if (curHealth < 0) curHealth = 0;
      attackStack = 0;
    }
    // 유저 공격
    else {
      attackStack++;
      if (attackStack === bandage[0]) {
        curHealth += bandage[1] + bandage[2];
        attackStack = 0;
      } else curHealth += bandage[1];
      if (curHealth > health) curHealth = health;
    }

    if (curHealth <= 0) return -1;
    time++;
  }

  return curHealth;
}

module.exports = solution;
