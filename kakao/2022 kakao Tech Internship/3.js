const solution = (alp, cop, problems) => {
  const goals = [0, 0];
  for (let i = 0; i < problems.length; i++) {
    goals[0] = Math.max(goals[0], problems[i][0]);
    goals[1] = Math.max(goals[1], problems[i][1]);
  }

  for (let i = 0; i < problems.length; i++) {
    problems[i].push((problems[i][2] + problems[i][3]) / problems[i][4]);
  }
  console.log(problems);

  const compareByTrainTime = (a, b) => {
    if (a[0] - alp + a[1] - cop < b[0] - alp + b[1] - cop) return -1;
    if (a[0] - alp + a[1] - cop > b[0] - alp + b[1] - cop) return 1;
    return 0;
  };

  const compareByEfficiency = (a, b) => {
    if (a[5] > b[5]) return -1;
    if (a[5] < b[5]) return 1;
    return 0;
  };

  problems.sort((a, b) => {
    if (compareByTrainTime(a, b) === 0) return compareByEfficiency(a, b);
    else return compareByTrainTime(a, b);
  });

  console.log(problems);
};

//testCase
const alp = 0;
const cop = 0;
const problems = [
  [0, 0, 2, 1, 2],
  [4, 11, 4, 0, 2],
  [10, 4, 0, 4, 2],
  [0, 0, 3, 1, 2],
];
solution(alp, cop, problems);
