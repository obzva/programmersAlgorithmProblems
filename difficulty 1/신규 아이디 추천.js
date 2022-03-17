function solution(new_id) {
    
    const available = 'abcdefghijklmnopqrstuvwxyz0123456789.-_'
    
    //1
    let recommend = new_id.toLowerCase().split('')

    //2
    recommend = recommend.filter(element => {
        return available.includes(element)
    });

    //3

    const answer = [recommend[0]];

    for (let i = 1; i < recommend.length; i ++) {
        const top = answer[answer.length - 1];
        if (top !== '.' || recommend[i] !== '.') {
            answer.push(recommend[i]);
        };
    };

    //4

    if (answer[0] === '.') {
        answer.shift()
    };
    if (answer[answer.length - 1] === '.') {
        answer.pop()
    };


    //5

    if (answer.length === 0) {
        answer.push('a');
    };

   

    //6

    if (answer.length >= 16) {
        answer.splice(15, answer.length - 15)
    };
    if (answer[answer.length - 1] === '.') {
        answer.pop()
    };

    //7
    if (answer.length === 1) {
        answer.push(answer[0]);
        answer.push(answer[0]);
    }else if (answer.length === 2) {
        answer.push(answer[1]);
    };

    return answer.join('');
};

/* other's answersheet using regExp

function solution(new_id) {
    const answer = new_id
        .toLowerCase() // 1
        .replace(/[^\w-_.]/g, '') // 2
        .replace(/\.+/g, '.') // 3
        .replace(/^\.|\.$/g, '') // 4
        .replace(/^$/, 'a') // 5
        .slice(0, 15).replace(/\.$/, ''); // 6
    const len = answer.length;
    return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}
*/