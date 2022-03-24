function solution(x) {
    let sum = String(x).split('').map(x => Number(x)).reduce((p, c) => p + c, 0);
    return x % sum === 0;
}