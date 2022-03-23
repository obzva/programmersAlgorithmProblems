function solution(a, b) {
    var answer = 0;
    if (a > b) {
        let tmp = a;
        a = b;
        b = tmp;
    }
    for (let i = a; i < b + 1; i ++) {
        answer += i;
    }

    return answer;
} // 가우스 함수로 하면 좀 더 쉬움