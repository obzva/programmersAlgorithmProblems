function permutation(arr, num) {
  const res = [];
  if (num === 1) return arr.map((v) => [v]);
  for (let i = 0; i < arr.length; i++) {
    const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const permutations = permutation(rest, num - 1);
    const attach = permutations.map((permutation) => [arr[i], ...permutation]);
    res.push(...attach);
  }
  return res;
}

const solution = (k, dungeons) => {
  let perms = permutation(dungeons, dungeons.length);
  let res = 0;
  for (let i = 0; i < perms.length; i++) {
    let tiredness = k;
    let visitCount = 0;
    for (let j = 0; j < perms[i].length; j++) {
      if (tiredness >= perms[i][j][0]) {
        tiredness -= perms[i][j][1];
        visitCount++;
      } else break;
    }
    if (visitCount === dungeons.length) return visitCount;
    if (visitCount > res) res = visitCount;
  }
  return res;
};

//testCase
let k = 80;
let dungeons = [
  [80, 20],
  [50, 40],
  [30, 10],
];
console.log(solution(k, dungeons));

/*
Test 1 〉	통과 (0.23ms, 30MB)
Test 2 〉	통과 (0.26ms, 29.7MB)
Test 3 〉	통과 (0.88ms, 29.8MB)
Test 4 〉	통과 (0.52ms, 30.1MB)
Test 5 〉	통과 (3.99ms, 34.1MB)
Test 6 〉	통과 (19.58ms, 39.1MB)
Test 7 〉	통과 (65.54ms, 60.1MB)
Test 8 〉	통과 (70.02ms, 59.6MB)
Test 9 〉	통과 (0.57ms, 30.1MB)
Test 10 〉	통과 (20.45ms, 39.1MB)
Test 11 〉	통과 (0.28ms, 30.1MB)
Test 12 〉	통과 (64.55ms, 59.6MB)
Test 13 〉	통과 (79.92ms, 60.1MB)
Test 14 〉	통과 (68.09ms, 58.9MB)
Test 15 〉	통과 (72.72ms, 59.3MB)
Test 16 〉	통과 (21.97ms, 38.7MB)
Test 17 〉	통과 (68.84ms, 59.1MB)
Test 18 〉	통과 (0.23ms, 30.1MB)
Test 19 〉	통과 (0.53ms, 29.9MB)
*/