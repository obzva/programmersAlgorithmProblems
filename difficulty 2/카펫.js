const getDivisor = yellow => {
    let res = [];
    const sqrt = Math.sqrt(yellow);
    for (let i = 1; i <= sqrt; i++) {
        if (yellow % i === 0) res.push(i);
    }
    return res;
}

const solution = (brown, yellow) => {
    if (yellow === 1) return [3, 3];
    const yellowDivisors = getDivisor(yellow);
    for (let i = 0; i < yellowDivisors.length; i++) {
        if (brown === 2 * (yellowDivisors[i] + (yellow / yellowDivisors[i]) + 2)) return [(yellow / yellowDivisors[i]) + 2, yellowDivisors[i] + 2];
    }
}

//testCase
let brown = 24;
let yellow = 24;
console.log(solution(brown, yellow));