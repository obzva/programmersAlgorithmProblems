const solution = (msg) => {
  const res = [];
  const dictionary = [false];
  for (let i = 65; i < 91; i++) {
    dictionary.push(String.fromCharCode(i));
  }
  while (true) {
    let i = 0;
    let j = 0;

    while (dictionary.includes(msg.slice(i, j + 1))) {
      j++;
      if (j === msg.length) {
        res.push(dictionary.indexOf(msg));
        return res;
      }
    }
    let w = msg.slice(i, j);
    res.push(dictionary.indexOf(w));
    msg = msg.slice(j);
    if (msg.length > 0) dictionary.push(w.concat(msg[0]));
    else return res;
  }
};

//testCase
const msg = "TOBEORNOTTOBEORTOBEORNOT";
console.log(solution(msg));
[20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34];
