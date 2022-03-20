function solution(numbers) {
    var answer = [];
    for (let i = 0, length = numbers.length; i < length - 1; i ++) {
        for (let j = i + 1, length = numbers.length; j < length; j ++) {
            if (!(answer.includes(numbers[i] + numbers[j]))) {
                answer.push(numbers[i] + numbers[j]);
            }
        }
    }
    return answer.sort((a, b) => a - b);
}

let numbers = [2,1,3,4,1];
solution(numbers);