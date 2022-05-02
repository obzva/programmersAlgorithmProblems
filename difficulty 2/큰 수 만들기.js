const solution = (number, k) => {
    let numbers = number.split('').map(e => Number(e));
    let count = k;
    const res = [];
    while (count > 0) {
        //console.log(numbers);
        //console.log(`count = ${count}`);
        let maxIdx = numbers.indexOf(Math.max(...numbers.slice(0, count + 1)));
        //console.log(`maxIdx = ${maxIdx}`);
        res.push(numbers[maxIdx]);
        //console.log(res);
        count -= maxIdx;
        numbers = numbers.slice(maxIdx + 1);
    }
    return res.concat(numbers).join('');
}

//testCase
let number = "4177252841";
let k = 4;
console.log(solution(number, k));