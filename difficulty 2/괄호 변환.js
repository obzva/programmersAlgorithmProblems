const solution = p => {
    let tmp1 = 0;
    let idx = 0;
    p[0] === '(' ? tmp1++ : tmp1--;
    for (let i = 1; i < p.length; i++) {
        p[i] === '(' ? tmp1++ : tmp1--;
        if (tmp1 === 0) {
            idx = i;
            break;
        }
    }
    console.log(idx);
}

let p = '(()())()';
solution(p);