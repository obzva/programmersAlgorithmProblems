const solution = (n) => {
  const result = Array.from({ length: n }, () => []);

  const howManyCycle = Math.floor((n - 1) / 3) + 1;

  const obj = {};
  let start = 1;
  for (let i = 0; i < howManyCycle; i++) {
    obj[i] = {};
    obj[i]["edgeLength"] = n - 3 * i;
    obj[i]["stripLength"] =
      obj[i]["edgeLength"] === 1 ? 1 : (n - 3 * i - 1) * 3;
    obj[i]["left"] = [];
    obj[i]["bottom"] = [];
    obj[i]["right"] = [];
    for (let j = start; j <= start + obj[i]["edgeLength"] - 1; j++) {
      obj[i]["left"].push(j);
    }
    for (
      let j = start + obj[i]["edgeLength"];
      j <= start + 2 * obj[i]["edgeLength"] - 2;
      j++
    ) {
      obj[i]["bottom"].push(j);
    }
    for (
      let j = start + 2 * obj[i]["edgeLength"] - 1;
      j <= start + obj[i]["stripLength"] - 1;
      j++
    ) {
      obj[i]["right"].push(j);
      obj[i]["right"].sort((a, b) => b - a);
    }
    start += obj[i]["stripLength"];
  }
  

  for (let k = 0; k < howManyCycle; k++) {
    for (let i = 0; i < obj[k]["left"].length; i++) {
      result[2 * k + i].push(obj[k]["left"][i]);
    }
  }

  for (let k = 0; k < howManyCycle; k++) {
    if (obj[k]["bottom"].length !== 0) {
      result[result.length - 1 - k].push(...obj[k]["bottom"]);
    }
  }

  for (let k = howManyCycle - 1; k >= 0; k--) {
    if (obj[k]["right"].length !== 0) {
      for (let i = 0; i < obj[k]["right"].length; i++) {
        result[2 * k + 1 + i].push(obj[k]["right"][i]);
      }
    }
  }

  return result.flat();
};

//testCase
const n = 4;
solution(n);
