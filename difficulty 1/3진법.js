function solution(n) {
    return Number.parseInt(n.toString(3).split('').reverse().join(''), 3);
}

/* use spread syntax instead of .split('') method
function solution(n) {
    return Number.parseInt([...n.toString(3)].reverse().join(''), 3);
}
*/