const solution = (survey, choices) => {
  const obj = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };
  for (let i = 0; i < survey.length; i++) {
    const negative = survey[i][0];
    const positive = survey[i][1];
    if (choices[i] < 4) {
      obj[negative] += Math.abs(choices[i] - 4);
    }
    if (choices[i] > 4) {
      obj[positive] += choices[i] - 4;
    }
  }

  const res = [];

  if (obj["R"] >= obj["T"]) res.push("R");
  else res.push("T");

  if (obj["C"] >= obj["F"]) res.push("C");
  else res.push("F");

  if (obj["J"] >= obj["M"]) res.push("J");
  else res.push("M");

  if (obj["A"] >= obj["N"]) res.push("A");
  else res.push("N");

  return res.join("");
};

//testCase
const [survey, choices] = [
  ["AN", "CF", "MJ", "RT", "NA"],
  [5, 3, 2, 7, 5],
];
solution(survey, choices);
