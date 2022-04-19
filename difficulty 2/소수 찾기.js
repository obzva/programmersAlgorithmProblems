function isPrime(x) {
    for (let i = 2; i <= Math.sqrt(x); i ++) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
}

function permutation(arr, num){
    const res = [];
    if(num === 1) return arr.map((v) => [v]);
    for (let i = 0; i < arr.length; i++) {
        const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
        const permutations = permutation(rest, num - 1);
        const attach = permutations.map((permutation) => [arr[i], ...permutation]);
        res.push(...attach);
    }
    return res;
}

const solution = number => {
    let res = 0;
    number = number.split('')
    let len = number.length;
    let perNumb = [];
    for (let i = 1; i <= len; i++) {
        let tmp = permutation(number, i).map(x => x.join(''));
        perNumb.push(...tmp);
    }
    perNumb = perNumb.filter((e, i) => perNumb.indexOf(e) === i && e[0] !== '0' && e !== '1').map(e => Number(e));
    console.log(perNumb);
    for (let i = 0; i < perNumb.length; i++) {
        if (isPrime(perNumb[i])) res ++;
    }
    return res;
}

//testCase
let number = "011";
console.log(solution(number));