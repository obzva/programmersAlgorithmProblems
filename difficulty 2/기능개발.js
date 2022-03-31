function solution(progresses, speeds) {
    let j = 0;
    let result = [];
    while (progresses[j] < 100) {
        let tmp = 0;
        for (let i = j; i < progresses.length; i++) {
            progresses[i] += speeds[i];
        }
        while (progresses[j] >= 100) {
            tmp++;
            j++;
        }
        if (tmp > 0) {
            result.push(tmp);
        }
        console.log(progresses);
    }
    return result;
}

let progresses = [95, 90, 99, 99, 80, 99];
let speeds = [1, 1, 1, 1, 1, 1];
console.log(solution(progresses, speeds));
