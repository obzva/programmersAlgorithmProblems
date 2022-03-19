function solution(N, stages) {
    
    let challenging = {};
    let failRatio = {};
    let challenger = stages.length;

    for (let i = 0, length = stages.length; i < length; i ++) {
        challenging[stages[i]] = (challenging[stages[i]] | 0) + 1;
    }
    
    for (let i = 1; i < N + 1; i ++) {
        challenger = challenger - (challenging[i - 1] | 0);
        failRatio[i] = (challenging[i] | 0) / challenger;
    }

    var answer = Object.keys(failRatio).sort((a, b) => failRatio[b] - failRatio[a]).map(x => Number(x));
    return answer;
}