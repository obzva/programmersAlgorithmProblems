/*시간초과
function solution(n) {
    let i = 1;
    while (true) {
        if (2 * n > 3 * (3**i - 1)) {
            i ++;
        } else {
            break;
        }
    } //자리수 구하기
    
    let tri = String((n - 3 / 2 * (3**(i - 1) - 1) - 1).toString(3)); //n이 속한 자릿수 내에서 0부터 시작하는 index 부여 후 3진변환

    if (tri.length < i) {
        tri = '0'.repeat(i - tri.length) + tri;
    }

    console.log(tri);

    return tri.replace(/2/g, '4').replace(/1/g, "2").replace(/0/g, '1'); //replace 순서 중요함
}*/

function solution(n) {
    let dict = ['1', '2', '4'];
    let answer = [];
    let i = 1;
    while (true) {
        if (2 * n > 3 * (3**i - 1)) {
            i ++;
        } else {
            break;
        }
    } //자리수 구하기

    n = n - 3 / 2 * (3**(i - 1) - 1) - 1;

    let ternary = [];
    for (j = 0; j < i; j ++) {
        ternary.push(0);
    }
    
    for (j = 0; j < ternary.length; j ++) {
        if (n === 0) {
            break;
        }
        ternary[j] = n % 3;
        n = Math.floor(n / 3);
    }
    
    for (let j = 0, length = ternary.length; j < length; j ++) {
        answer.unshift(dict[ternary[j]]);
    }

    return answer.join('');
}