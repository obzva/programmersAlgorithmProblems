function solution(numbers) {

    let refNums = [0,1,2,3,4,5,6,7,8,9];

    refNums = refNums.filter(x => !(numbers.includes(x)));

    var answer = refNums.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    return answer;
};

/* 더 쉬운 방법
function solution(numbers) {
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
};*/