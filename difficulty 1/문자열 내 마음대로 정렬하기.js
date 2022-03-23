function solution(strings, n) {
    strings = strings.sort();
    let sorter = {};
    let sorted = [];
    for (let i = 0; i < strings.length; i ++) {
        sorter[strings[i]] = strings[i].charCodeAt(n);
    }
    return Object.entries(sorter).sort((a, b) => a[1] - b[1]).map(x => x[0])
}
/* 삼항연산자와 'string.prototype.localeCompare()'을 사용
function solution(strings, n) {
    return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}*/