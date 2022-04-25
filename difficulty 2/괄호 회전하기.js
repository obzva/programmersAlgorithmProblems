const rotator = (s, r) => {
    if (r === 0) return s;
    return s.slice(-r).concat(s.slice(0, s.length - r));
}

const validator = string => {
    let stack = [string[0]];
    for (let i = 1; i < string.length; i++) {
        if ((string[i] === ')' && stack[stack.length - 1] === '(')
            || (string[i] === '}' && stack[stack.length - 1] === '{')
            || (string[i] === ']' && stack[stack.length - 1] === '[')) {
            stack.pop();
        } else {
            stack.push(string[i]);
        }
    }
    return stack.length === 0 ? true : false;
}

const solution = s => {
    const max = s.length - 1;
    const rotated = [];
    let res = 0;
    for (let i = 0; i <= max; i++) {
        rotated.push(rotator(s, i));
    }
    console.log(rotated);
    for (const string of rotated) {
        if (validator(string)) res++
    }
    return res;
}

//testCase
let s = '[](){}';
//let s = '([{)}]';
//console.log(rotator(s, 3));
solution(s);