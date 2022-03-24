function solution(arr1, arr2) {
    let row = arr1.length;
    let col = arr1[0].length;

    let answer = []

    for (let i = 0; i < row; i++) {
        answer.push([])
        for (let j = 0; j < col; j++) {
            answer[i].push(arr1[i][j] + arr2[i][j]);
        }
    }
    return answer;
}