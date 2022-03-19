function solution(answers) {

    let obj = {1: 0, 2: 0, 3: 0};
    for (let i = 0; i < answers.length; i ++) {
        if (i % 5 === 0 && answers[i] === 1) {
            obj[1] ++;
        } else if (i % 5 === 1 && answers[i] === 2) {
            obj[1] ++;
        } else if (i % 5 === 2 && answers[i] === 3) {
            obj[1] ++;
        } else if (i % 5 === 3 && answers[i] === 4) {
            obj[1] ++;
        } else if (i % 5 === 4 && answers[i] === 5) {
            obj[1] ++;
        }
    }

    for (let i = 0; i < answers.length; i ++) {
        if (i % 8 === 0 && answers[i] === 2) {
            obj[2] ++;
        } else if (i % 8 === 1 && answers[i] === 1) {
            obj[2] ++;
        } else if (i % 8 === 2 && answers[i] === 2) {
            obj[2] ++;
        } else if (i % 8 === 3 && answers[i] === 3) {
            obj[2] ++;
        } else if (i % 8 === 4 && answers[i] === 2) {
            obj[2] ++;
        } else if (i % 8 === 5 && answers[i] === 4) {
            obj[2] ++;
        } else if (i % 8 === 6 && answers[i] === 2) {
            obj[2] ++;
        } else if (i % 8 === 7 && answers[i] === 5) {
            obj[2] ++;
        }
    }

    for (let i = 0; i < answers.length; i ++) {
        if (i % 10 === 0 && answers[i] === 3) {
            obj[3] ++;
        } else if (i % 10 === 1 && answers[i] === 3) {
            obj[3] ++;
        } else if (i % 10 === 2 && answers[i] === 1) {
            obj[3] ++;
        } else if (i % 10 === 3 && answers[i] === 1) {
            obj[3] ++;
        } else if (i % 10 === 4 && answers[i] === 2) {
            obj[3] ++;
        } else if (i % 10 === 5 && answers[i] === 2) {
            obj[3] ++;
        } else if (i % 10 === 6 && answers[i] === 4) {
            obj[3] ++;
        } else if (i % 10 === 7 && answers[i] === 4) {
            obj[3] ++;
        } else if (i % 10 === 8 && answers[i] === 5) {
            obj[3] ++;
        } else if (i % 10 === 9 && answers[i] === 5) {
            obj[3] ++;
        }
    }

    let maxValue = Math.max(...Object.values(obj));
 
    let answer = Object.keys(obj).filter(x => obj[x] === maxValue).map(x => Number(x));

    return answer;
}

/*더 깔끔한 풀이
function solution(answers) {
    var answer = [];
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
    var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
    var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
    var max = Math.max(a1c,a2c,a3c);

    if (a1c === max) {answer.push(1)};
    if (a2c === max) {answer.push(2)};
    if (a3c === max) {answer.push(3)};


    return answer;
}
*/