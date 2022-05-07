const solution = (lines) => {
  const map = [];
  for (let i = 0; i < lines.length; i++) {
    const timeSpent = Number(lines[i].split(" ")[2].slice(0, -1));
    const timeFinish = lines[i]
      .split(" ")[1]
      .split(":")
      .map((x) => Number(x));
    const secFinish = timeFinish[0] * 3600 + timeFinish[1] * 60 + timeFinish[2];
    const secStart = Number((secFinish - timeSpent + 0.001).toPrecision(8));
    map.push([i, "IN", secStart]);
    map.push([i, "OUT", secFinish + 1]);
  }
  map.sort((a, b) => {
    if (a[2] - b[2] < 0) return -1;
    if (a[2] - b[2] > 0) return 1;
    return 0;
  });
  //console.log(map);

  const history = [];
  let maxCount = 0;
  let count = 0;
  for (let i = 0; i < map.length; i++) {
    if (map[i][1] === "IN") {
      history.push(map[i][0]);
      count++;
      if (maxCount < count) maxCount = count;
    } else {
      history.splice(history.indexOf(map[i][0]), 1);
      count--;
    }
  }
  return maxCount;
};

//testCase
const lines = [
  "2016-09-15 20:59:57.421 0.351s",
  "2016-09-15 20:59:58.233 1.181s",
  "2016-09-15 20:59:58.299 0.8s",
  "2016-09-15 20:59:58.688 1.041s",
  "2016-09-15 20:59:59.591 1.412s",
  "2016-09-15 21:00:00.464 1.466s",
  "2016-09-15 21:00:00.741 1.581s",
  "2016-09-15 21:00:00.748 2.31s",
  "2016-09-15 21:00:00.966 0.381s",
  "2016-09-15 21:00:02.066 2.62s",
];
solution(lines);
