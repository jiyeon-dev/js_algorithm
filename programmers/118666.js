/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/118666
 */
function solution(survey, choices) {
  // RT, CF, JM, AN
  const surveyType = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  survey.forEach((question, index) => {
    const [A, B] = question.split("");
    const choice = choices[index];

    // 3, 2, 1, 0, 1, 2, 3
    if (choice > 4) surveyType[B] += choice - 4;
    else if (choice < 4) surveyType[A] += 4 - choice;
  });

  return (
    (surveyType["R"] >= surveyType["T"] ? "R" : "T") +
    (surveyType["C"] >= surveyType["F"] ? "C" : "F") +
    (surveyType["J"] >= surveyType["M"] ? "J" : "M") +
    (surveyType["A"] >= surveyType["N"] ? "A" : "N")
  );
}

module.exports = solution;
