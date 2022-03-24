function solution(n) {
    return Number(String(n).split('').map(x => Number(x)).sort((a, b) => b - a).join(''));
}