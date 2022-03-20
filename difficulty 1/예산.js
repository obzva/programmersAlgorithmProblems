function solution(d, budget) {
    let answer = 0;
    for (let i = 0, length = d.length; i < length; i ++) {
        if (budget >= d.sort((a, b) => a - b)[i]) {
            budget -= d.sort((a, b) => a - b)[i];
            answer ++;
        }
    }
    return answer;
}