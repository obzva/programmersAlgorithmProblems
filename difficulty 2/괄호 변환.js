//u v 어디에서 split할건지 idx 찾아주는 function
const splitter = p => {
    let tmp = 0;
    p[0] === '(' ? tmp++ : tmp--;
    for (let i = 1; i < p.length; i++) {
        p[i] === '(' ? tmp++ : tmp--;
        if (tmp === 0) {
            return i;
        }
    }
}
//올바른 괄호 문자열 판단하는 function
const judge = p => {
    if (p[0] === ')') return false;
    let tmp = [1];
    for (let i = 1; i < p.length; i++) {
        if (p[i] === '(') tmp.push(1);
        if (p[i] === ')') tmp.pop();
    }
    return tmp.length === 0 ? true : false;
}
//주어진 알고리즘 구현하는 function
const solution = p => {
    if (p === '') return p;
    if (judge(p)) {
        console.log('first judge true');
        return p;
    } else {
        console.log('first judge false');
    }
    let idx = splitter(p);
    let u = p.slice(0, idx + 1);
    console.log(`u: ${u}`);
    let v = p.slice(idx + 1);
    console.log(`v: ${v}`);
    if (judge(u)) {
        console.log('judge true');
        return u.concat(solution(v));
    } else {
        console.log('judge false');
        u = u.slice(1, -1).split('').map(x => {
            if (x === '(') {
                return ')';
            } else {
                return '(';
            }
        }).join('');
        console.log(`u: ${u}`);
        return '('.concat(solution(v), ')', u);
    }
}

/* 더 나은 풀이
function reverse(str) {
    return str.slice(1, str.length - 1).split("").map((c) => (c === "(" ? ")" : "(")).join("");
  }
  
  function solution(p) {
    if (p.length < 1) return "";
  
    let balance = 0;
    let pivot = 0;
    do { balance += p[pivot++] === "(" ? 1 : -1 } while (balance !== 0);
  
    const u = p.slice(0, pivot);
    const v = solution(p.slice(pivot, p.length));
  
    if (u[0] === "(" && u[u.length - 1] == ")") return u + v;
    else return "(" + v + ")" + reverse(u);
  } */  