function solution(s) {
    result = [];
    let splitted = s.split(' ');
    for (let i = 0; i < splitted.length; i ++) {
        for (let j = 0; j < splitted[i].length; j ++) {
            j % 2 === 0 ? result.push(splitted[i][j].toUpperCase()) : result.push(splitted[i][j].toLowerCase());
        }
        if (i !== splitted.length - 1) {
            result.push(' ');
        }
    }
    return result.join('')
}

let s = "try hello world";
console.log(solution(s));
