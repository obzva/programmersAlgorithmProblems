//약수의 개수 알고리즘
const getDivisor = number => {
    let max = Math.sqrt(number);
    let numDivisor = 0
    for (let i = 1; i <= max; i ++) {
        if (number % i === 0) {
            numDivisor ++;
        } 
    }
    numDivisor *= 2;
    if (max === Math.floor(max)) {
        numDivisor --;
    }
    return numDivisor;
}

function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i ++) {
        if (getDivisor(i) % 2 === 0) {
            answer += i;
        } else {
            answer -= i;
        }
    }
    return answer;
}

/* 더 깔끔한 코딩: 굳이 약수의 개수까지 구할 필요 없음 (약수가 홀수인 경우는 완전제곱수인 경우 뿐이니까)
function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}
*/