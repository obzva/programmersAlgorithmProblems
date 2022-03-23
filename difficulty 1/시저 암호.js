function solution(s, n) {
    let answer = [];
    for (let i = 0, length = s.length; i < length; i ++) {
        if (s[i] === ' ') {
            answer.push(' ');
        }else if (s[i] === s[i].toUpperCase()) {
            let tmp1 = s.charCodeAt(i) + n;
            if (tmp1 > 90) {
                answer.push(String.fromCharCode(tmp1 - 26));
            } else {
                answer.push(String.fromCharCode(tmp1));
            }
        } else if (s[i] === s[i].toLowerCase()) {
            let tmp2 = s.charCodeAt(i) + n;
            if (tmp2 > 122) {
                answer.push(String.fromCharCode(tmp2 - 26));
            } else {
                answer.push(String.fromCharCode(tmp2));
            }
        }
    }
    return answer.join('');
}