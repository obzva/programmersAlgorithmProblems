function solution(a, b) {
    var answer = 0;

    for (let i = 0; i < a.length; i ++) {
        answer += a[i] * b[i];
    };

    return answer;
};

/* reduce로 더 간단하게 표현
function solution(a, b) {
    return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}
*/