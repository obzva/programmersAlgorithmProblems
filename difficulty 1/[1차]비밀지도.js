function solution(n, arr1, arr2) {
    let answer = [];

    let map1 = arr1.map(x => {
        if (x.toString(2).length < n) {
            return '0'.repeat(n - x.toString(2).length) + x.toString(2)
        }
        return x.toString(2)
    });
    let map2 = arr2.map(x => {
        if (x.toString(2).length < n) {
            return '0'.repeat(n - x.toString(2).length) + x.toString(2)
        }
        return x.toString(2)
    });

    for (let i = 0; i < n; i ++) {
        answer.push([]);
        for (let j = 0; j < n; j ++) {
            if (map1[i].split('')[j] === '1' || map2[i].split('')[j] === '1') {
                answer[i].push('#');
            } else {
                answer[i].push(' ');
            }
        }
    }

    return answer.map(x => x.join(''));
}

/* 비트와이즈 연산자 '|' 와 unary plus '+'를 사용한 더 나은 풀이
const addZero = (n, s) => {
    return '0'.repeat(n - s.length) + s;
}

function solution(n, arr1, arr2) {
    return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
}

let n = 6;
let arr1 = [46, 33, 33 ,22, 31, 50];
let arr2 = [27 ,56, 19, 14, 14, 10];

console.log(+'1');
console.log(+'0')*/