const solution = numbers => {
    numbers = numbers.map(x => String(x)).sort((a, b) => Number(b + a) - Number(a + b));
    let result = numbers.join('');
    return result[0]==='0' ? '0' : result;
}

//testcase
let numbers = [3, 4, 5, 0];
console.log(solution(numbers));
