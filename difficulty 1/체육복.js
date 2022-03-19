function solution(n, lost, reserve) {

    let obj = {};

    //각 번호당 가지고 있는 체육복 수 obj 생성
    for (let i = 1; i < n + 1; i ++) {
        obj[i] = 1;
        if (lost.includes(i)) {
            obj[i] --;
        }
        if (reserve.includes(i)) {
            obj[i] ++;
        }
    }

    for (let i = 1; i < n + 1; i ++) {
        if (obj[i] === 2) {
            if (obj[i - 1] === 0) {
                obj[i] --;
                obj[i - 1] ++;
            } else if (obj[i + 1] === 0) {
                obj[i] --;
                obj[i + 1] ++;
            }
        }
    }

    let answer = Object.keys(obj).filter(x => obj[x] > 0).length;
    return answer;
}