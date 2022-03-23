//에라토스테네스의 체
function prime(x) {
    for (let i = 2; i <= Math.sqrt(x); i ++) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
}

function solution(n) {
    result = 0;
    for (let i = 2; i < n + 1; i ++) {
        if (prime(i)) {
            result ++;
        }
    }
    return result;
}