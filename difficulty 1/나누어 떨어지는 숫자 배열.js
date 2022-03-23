function solution(arr, divisor) {
    if (arr.filter(x => x % divisor === 0).length !== 0) {
        return (arr.filter(x => x % divisor === 0).sort((a, b) => a - b));
    } else {
        return [-1]
    } //삼항조건연산자 쓰면 좀 더 깔끔함
}