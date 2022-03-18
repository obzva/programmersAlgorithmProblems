/*
//첫번째시도
function solution(participant, completion) {
    for (let i = 0; i < participant.length; i ++) {
        if (completion.includes(participant[i])) {
            completion.splice(completion.indexOf(participant[i]),1);
        } else {
            return participant[i]
        }
    }
}

//두번째시도
function solution(participant, completion) {
    for (let i = 0; i < completion.length; i ++) {
        participant.splice(participant.indexOf(completion[i]),1);
    }
    
    return participant[0];
}

//세번째시도
function solution(participant, completion) {
    const players = {};
    participant.forEach(element => {
        if (players[element] > 0) {
            players[element] ++;
        } else {
            players[element] = 1;
        }
    });
    completion.forEach(element => {
        players[element] --;
    });

    return Object.keys(players).filter(player => players[player] > 0).toString()
}*/

//압도적으로 좋은 풀이
//var solution=(_,$)=>_.find(_=>!$[_]--,$.map(_=>$[_]=($[_]|0)+1))

let solution = (participant, completion) => participant.find(name => !completion[name]-- ,completion.map(name => completion[name] = (completion[name] | 0) + 1))
