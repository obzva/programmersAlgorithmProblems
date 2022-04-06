//조합 function
function combination(arr, num){
    const res = [];
    if(num === 1) return arr.map((v) => [v]);
    for (let i = 0; i < arr.length; i++) {
        const rest = arr.slice(i + 1);
        const combinations = combination(rest, num - 1);
        const attach = combinations.map((combination) => [arr[i], ...combination]);
        res.push(...attach);
    }
    /*forEach는 시간 많이 씀
    arr.forEach((v, idx, arr) => {
      const rest = arr.slice(idx+1);
      const combinations = combination(rest, num-1);
      const attach = combinations.map((combination) => [v, ...combination]);
      res.push(...attach);
    })*/
    return res;
  }

const solution = (orders, course) => {
    let answer = [];
    let obj = {};
    //코스의 단품메뉴개수 obj 생성
    for (let i = 0; i < course.length; i++) {
        obj[course[i]] = {};
        //orders에서 코스 combination, 그리고 주문받은 수 저장
        for (let j = 0; j < orders.length; j++) {
            let tmpArr = combination(orders[j].split(''), course[i]);
            if (tmpArr === []) continue;
            for (let k = 0; k < tmpArr.length; k++) {
                obj[course[i]][tmpArr[k].sort().join('')] = (obj[course[i]][tmpArr[k].sort().join('')] | 0) + 1; 
            }
        }
        //각 course마다 제일 많이 주문받은 조합
        let max = Math.max(...Object.values(obj[course[i]]));
        if (max > 1) {
            answer.push(...Object.keys(obj[course[i]]).filter(x => obj[course[i]][x] === max));
        }
    }
    return answer.sort();
}

//testcase
let orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], course = [2,3,4];
console.log(solution(orders, course));