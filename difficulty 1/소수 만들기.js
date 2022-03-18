//에라토스테네스의 체
const prime = array => {
    let max = array[array.length-1], upperLimit = Math.sqrt(max);
    for (let i = 2; i <= upperLimit; i ++) {
        array = array.filter(x => x % i !== 0);
    };
    return array;
}


function solution(nums) {
    nums.sort((a, b) => a - b); //nums 크기 순으로 sorting
    
    let sums = [];
    
    for (let i = 0; i < nums.length - 2; i ++) { //3개 수 조합으로 합 array 생성
        for (let j = i + 1; j < nums.length - 1; j ++) {
            for (let k = j + 1; k < nums.length; k ++) {
                sums.push(nums[i] + nums[j] + nums[k]);
            }
        }
    };
    
    return prime(sums).length;
};