/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42888
 */
function solution(recode) {
  const stack = []; // 아이디별 메세지 저장 리스트
  const name_map = {}; // 아이디별 이름 저장 맵 { id: name }
  recode.map((row) => {
    const [type, id, name] = row.split(" ");
    if (type === "Enter") {
      name_map[id] = name;
      stack.push([id, "님이 들어왔습니다."]);
    } else if (type === "Leave") stack.push([id, "님이 나갔습니다."]);
    else if (type === "Change") name_map[id] = name; // 이름 변경
  });

  return stack.map((row) => `${name_map[row[0]]}${row[1]}`);
}

module.exports = solution;
