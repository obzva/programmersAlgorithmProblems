const solution = s => {
    let res = [];
    //숫자,숫자 형식의 string array로 가공
    let sSplit = s.split('},{');
    sSplit[0] = sSplit[0].slice(2);
    sSplit[sSplit.length - 1] = sSplit[sSplit.length - 1].slice(0, -2);
    sSplit = sSplit.sort((a, b) => a.length - b.length);
    //본격 튜플로 재구성
    for (let i = 0; i < sSplit.length; i++) {
        let tmp = sSplit[i].split(',').map(x => Number(x));
        for (let j = 0; j < tmp.length; j++) {
            if (!res.includes(tmp[j])) {
                res.push(tmp[j]);
            }
        }
    }
    return res;
}
//test case
let s = "{{4,2,3},{3},{2,3,4,1},{2,3}}";
solution(s);