/* 좌우로 긴 사각형에서 오류납니다
function solution(w, h) {
    return (h - Math.ceil(h / w)) * w;
}*/

//위아래로 길게 만들어주기

/* 방식 자체는 틀림이 없어 보이는데, 아마 실수형 정밀도 때문에 틀리는 것 같습니다
function solution(w, h) {
    if (w > h) {
        let tmp = [w, h].sort((a, b) => a - b);
        w = tmp[0], h = tmp[1];
    }
    return (h - Math.ceil(h / w)) * w;
}*/
function gcd(a, b) //GCD Algorithm
{
if (b === 0)
    return a;
return gcd(b, a % b);
}
function solution(w, h) {
    return w > h ? w * h - w - h + gcd(w, h) : w * h - w - h + gcd(h, w);
}