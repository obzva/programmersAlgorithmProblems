//num까지 다 해봐야하진 않을 것 같은데 귀찮아서 그냥 다 함

function solution(s) {
    let num = s.length; //input 길이
    let obj = {};
    for (let i = 1; i <= num; i++) { //i개씩 토막내보기
        let arr = [s.slice(0, i)]; //첫토막 먼저 넣음
        let tmp = 1;
        let top = arr[arr.length - 1];
        for (let j = i; j < num; j += i) {
            if (!(s[j + i])) { //마지막 꼬다리
                if (top === s.slice(j, j + i)) { //중복
                    tmp++;
                    arr[arr.length - 1] = `${tmp}` + top;
                } else { //안중복
                    tmp = 1;
                    top = s.slice(j, j + i);
                    arr.push(s.slice(j, j + i));
                }
            } else { //마지막 꼬다리가 아닐 경우
                if (top === s.slice(j, j + i)) { //중복
                    tmp++;
                    arr[arr.length - 1] = `${tmp}` + top;
                } else { //안중복
                    tmp = 1;
                    top = s.slice(j, j + i);
                    arr.push(s.slice(j, j + i));
                }
            }
        }
        obj[i] = arr.join('').length;
    }
    return Math.min(...Object.values(obj));
}