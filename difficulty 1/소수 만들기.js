//에라토스테네스의 체
function prime(x) {
    for (let i = 2; i <= Math.sqrt(x); i ++) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
}

function solution(nums) {
    let answer = 0;
    for (let i = 0; i < nums.length - 2; i ++) { //3개 수 조합으로 합 array 생성
        for (let j = i + 1; j < nums.length - 1; j ++) {
            for (let k = j + 1; k < nums.length; k ++) {
                if (prime(nums[i] + nums[j] + nums[k])) {
                    answer ++;
                }
            }
        }
    }
    return answer;
}