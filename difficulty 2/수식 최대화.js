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
const solution = expression => {
    /* 수식 생성하는 함수 내부로 이동
    //숫자 저장
    let numbs = expression.split(/[\+\-\*]/);
    */
    //연산자 순서 저장
    let orderOprs = [];
    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === '+') {
            orderOprs.push('+');
        } else if (expression[i] === '-') {
            orderOprs.push('-');
        } else if (expression[i] === '*') {
            orderOprs.push('*');
        }
    }
    //연산자 우선순위 경우의 수 생성
    let oprs = ['+', '-', '*'];
    let perOprs = permutation(oprs, 3);
    //수식 만들기
    const formulator = (orderOprsArg, perOprArg) => {
        //함수 밖에서 numbs = expression.split(/[\+\-\*]/)로 선언하고 함수를 여러번 돌리면 돌릴 때마다 numbs 자체가 변해버려서 함수 돌릴 때마다 numbs를 새로 정의했다
        let numbsArg = expression.split(/[\+\-\*]/);
        for (let i = 0; i < 3; i++) {
            while (orderOprsArg.includes(perOprArg[i])) {
                numbsArg.splice(orderOprsArg.indexOf(perOprArg[i]), 2, '(' + numbsArg[orderOprsArg.indexOf(perOprArg[i])] + perOprArg[i] + numbsArg[orderOprsArg.indexOf(perOprArg[i]) + 1] + ')');
                if (orderOprsArg.indexOf(perOprArg[i]) === 0) {
                    orderOprsArg = orderOprsArg.slice(1);
                } else if (orderOprsArg.indexOf(perOprArg[i]) === orderOprsArg.length - 1) {
                    orderOprsArg = orderOprsArg.slice(0, -1);
                } else {
                    orderOprsArg = orderOprsArg.slice(0, orderOprsArg.indexOf(perOprArg[i])).concat(orderOprsArg.slice(orderOprsArg.indexOf(perOprArg[i]) + 1));
                }
            }
        }
        return numbsArg.join('');
    }
    let res = [];
    for (let i = 0; i < perOprs.length; i++) {
        res.push(formulator(orderOprs, perOprs[i]));
    }
    return Math.max(...res.map(x => Math.abs(eval(x))))
}
let expression = "50*6-3*2";
console.log(solution(expression));