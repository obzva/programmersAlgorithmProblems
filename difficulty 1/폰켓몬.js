function solution(nums) {

    let N = nums.length;

    let types = [];

    for (let i = 0; i < nums.length; i ++) {
        if (!(types.includes(nums[i]))) {
            types.push(nums[i]);
        }
    }

    answer = 0;

    if (types.length >= N/2) {
        answer = N/2;
    } else {
        answer = types.length;
    }

    return answer;
}

/*더 깔끔한 코드
function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length >= max ? max : arr.length
}
*/