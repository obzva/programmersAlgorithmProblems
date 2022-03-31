function solution(numbers, target) {
    let answer = 0;
    const dfs = (level, sum) => { //깊이우선탐색..
        if (level === numbers.length) {
            if (sum === target) {
                answer++;
            }
            return;
        }
        dfs(level + 1, sum + numbers[level]); //더하기먼저탐색
        dfs(level + 1, sum - numbers[level]); //그이후에빼기탐색
    }
    dfs(0, 0);
    return answer;
} //짱신기하다