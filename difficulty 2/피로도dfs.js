function solution(k, d) {
  const N = d.length;
  const visited = new Array(N).fill(0);
  let ans = 0;

  function dfs(k, cnt) {
    ans = Math.max(cnt, ans);

    for (let j = 0; j < N; j++) {
      if (k >= d[j][0] && !visited[j]) {
        visited[j] = 1;
        dfs(k - d[j][1], cnt + 1);
        visited[j] = 0;
      }
    }
  }

  dfs(k, 0);
  return ans;
}

/*
Test 1 〉	통과 (0.10ms, 30.1MB)
Test 2 〉	통과 (0.13ms, 30.2MB)
Test 3 〉	통과 (0.10ms, 30MB)
Test 4 〉	통과 (0.21ms, 29.8MB)
Test 5 〉	통과 (1.35ms, 32.9MB)
Test 6 〉	통과 (2.25ms, 32.9MB)
Test 7 〉	통과 (6.32ms, 33.1MB)
Test 8 〉	통과 (7.85ms, 33.3MB)
Test 9 〉	통과 (0.10ms, 29.6MB)
Test 10 〉	통과 (0.56ms, 30.1MB)
Test 11 〉	통과 (0.09ms, 30MB)
Test 12 〉	통과 (1.96ms, 32.8MB)
Test 13 〉	통과 (0.25ms, 30.1MB)
Test 14 〉	통과 (0.17ms, 30.1MB)
Test 15 〉	통과 (0.14ms, 30.1MB)
Test 16 〉	통과 (0.13ms, 30.1MB)
Test 17 〉	통과 (0.18ms, 30.1MB)
Test 18 〉	통과 (0.11ms, 30MB)
Test 19 〉	통과 (0.16ms, 30.1MB)
*/