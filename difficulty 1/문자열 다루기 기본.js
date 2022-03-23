/*function solution(s) {
    return /^\d*$/.test(s) && (s.length === 4 || s.length === 6);
}*/

//OR 연산자를 정규표현식 안에 집어 넣는게 더 깔끔하다
function solution(s) {
    return /^\d{4}$|^\d{6}$/.test(s);
}