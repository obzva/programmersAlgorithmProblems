function solution(n)
{
    let answer = 0;
    let list = String(n).split('')
    for (let i = 1; i <= list.length; i++) {
        answer += Number(list[list.length - i]);
    }
    return answer;
}