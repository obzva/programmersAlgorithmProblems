/*const solution = (s, i = 0) => {
    if (s[i] === s[i + 1]) {
        if (s.length === 2) {
            return 1;
        }
        s = s.slice(0, i).concat(s.slice(i + 2));
        i = 0;
        solution(s, i);
    } else {
        if (i === s.length - 1) {
            return 0;
        }
        solution(s, i + 1);
    }
}*/

const solution = (s, i = 0) => {
    if (i === s.length - 1) {
        return 0;
    }
    if (s[i] === s[i + 1]) {
        s = s.slice(0, i).concat(s.slice(i + 2));
        solution(s);
    }
    if (!s) {
        return 1;
    }
    solution(s, i + 1);
}

let s = 'cdcd';
solution(s);
console.log(solution(s));