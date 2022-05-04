function solution(dartResult) {
    results = []
    var answer = 0;
    for (let i = 0, length = dartResult.length; i < length; i ++) {
        if (dartResult[i].match(/\d/)) {
            if (dartResult[i] === '1' && dartResult[i + 1] === '0') {
                results.push(10);
            } else if (dartResult[i] === '0' && dartResult[i - 1] === '1') {
                continue;
            } else {
                results.push(Number(dartResult[i]));
            }
        } else if (dartResult[i] === 'D') {
            results[results.length - 1] = results[results.length - 1] ** 2;
        } else if (dartResult[i] === 'T') {
            results[results.length - 1] = results[results.length - 1] ** 3;
        } else if (dartResult[i] === '*') {
            if (results.length === 1) {
                results[0] *= 2;
            } else {
                results[results.length - 1] *= 2;
                results[results.length - 2] *= 2;
            }
        } else if (dartResult[i] === '#') {
            results[results.length - 1] *= -1;
        }
    }
    return results.reduce((p, c) => p + c, 0);
}