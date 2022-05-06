const solution = (fees, records) => {
  const ins = {};
  const times = {};

  for (let i = 0; i < records.length; i++) {
    const record = records[i].split(" ");

    record[0] = record[0][0] === "0" ? record[0].slice(1) : record[0];
    record[0] =
      Number(record[0].split(":")[0]) * 60 + Number(record[0].split(":")[1]);

    if (record[2] === "IN") {
      ins[record[1]] = record[0];
      times[record[1]] = times[record[1]] | 0;
    } else {
      const time = record[0] - ins[record[1]];
      delete ins[record[1]];
      times[record[1]] += time;
    }
    //console.log("ins");
    //console.log(ins);
    //console.log("times");
    //console.log(times);
  }
  //console.log("loop done");

  if (Object.keys(ins).length > 0) {
    const lefts = Object.keys(ins);
    if (lefts.length > 0) {
      for (let i = 0; i < lefts.length; i++) {
        const left = lefts[i];
        const time = 23 * 60 + 59 - ins[left];
        delete ins[left];
        times[left] += time;
      }
    }
  }

  console.log(times);
  const res = Object.keys(times)
    .map((x) => Number(x))
    .sort((a, b) => a - b)
    .map((x) => {
      const X =
        String(x).length < 4
          ? "0".repeat(4 - String(x).length).concat(String(x))
          : String(x);
      return times[X] <= fees[0]
        ? fees[1]
        : fees[1] + Math.ceil((times[X] - fees[0]) / fees[2]) * fees[3];
    });

  console.log(res);
  return res;
};

//testCase
const fees = [180, 5000, 10, 600];
const records = [
  "05:34 5961 IN",
  "06:00 0000 IN",
  "06:34 0000 OUT",
  "07:59 5961 OUT",
  "07:59 0148 IN",
  "18:59 0000 IN",
  "19:09 0148 OUT",
  "22:59 5961 IN",
  "23:00 5961 OUT",
];
solution(fees, records);
