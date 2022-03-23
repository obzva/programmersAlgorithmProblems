/* unnecessary ternary operator
function solution(s){
    return s.toLowerCase().split('p').length === s.toLowerCase().split('y').length ? true : false;
}*/

function solution(s){
    return s.toLowerCase().split('p').length === s.toLowerCase().split('y').length;
}