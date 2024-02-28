/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/92334
 */
function solution(id_list, report, k) {
  var answer = [];

  const report_map = {}; // 유저별 신고한 유저 리스트 - 중복 제거
  const report_count = {}; // 유저별 신고 당항 횟수

  report.map((row) => {
    const [a, b] = row.split(" ");

    // 초기화
    if (!report_map[a]) report_map[a] = [];
    if (!report_count[b]) report_count[b] = 0;

    // 신고 안했던 유저인 경우 => 리스트 및 횟수 추가
    if (!report_map[a].includes(b)) {
      report_map[a].push(b);
      report_count[b] += 1;
    }
  });

  // 유저별 신고한 유저가 k보다 크거나 같아 몇 개의 처리 결과를 메일 받는지 확인
  id_list.forEach((user) => {
    let count = 0;
    report_map[user]?.forEach((banUser) => {
      if (report_count[banUser] >= k) count += 1;
    });
    answer.push(count);
  });

  return answer;
}

module.exports = solution;
