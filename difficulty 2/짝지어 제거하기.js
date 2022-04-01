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

/*
런타임에러

const solution = (s) => {
    answer = 0;
    let i = 0;
    const pairRemover = (s, i) => {
        if (i === s.length - 1) {
            return;
        } else {
            if (s[i] === s[i + 1]) {
                if (s.length === 2) {
                    answer = 1;
                    return;
                } else {
                    s = s.slice(0, i).concat(s.slice(i + 2));
                    i = 0;
                    pairRemover(s, i);
                }
            } else {
                i++;
                pairRemover(s, i);
            }
        }  
    }
    pairRemover(s, i);
    return answer;
}*/

/*
시간초과

const solution = s => {
    let stack = [s[0]];
    for (let i = 1; i < s.length; i++) {
        let curr = s[i];
        if (stack[0] === curr) {
            stack.shift();
        } else {
            stack.unshift(curr)
        }
    }
    return stack.length === 0 ? 1 : 0;
}*/

/*
시간초과: shift, unshift의 시간복잡도는 O(n)인데 반해 pop, push의 시간복잡도는 O(1)

const solution = s => {
    let stack = [s[0]];

    for (let i = 1; i < s.length; i++) {
        if (stack[stack.length - 1] === s[i]) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return stack.length === 0 ? 1 : 0;
}*/

//홀수 케이스 제외해주면 시간초과 안 함
const solution = s => {
    if (s.length % 2 === 1) {
        return 0;
    }

    let stack = [s[0]];

    for (let i = 1; i < s.length; i++) {
        if (stack[stack.length - 1] === s[i]) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return stack.length === 0 ? 1 : 0;
}