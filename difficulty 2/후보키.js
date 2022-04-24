const isUnique = (relation, row, col) => {
    const uniques = [];
    const unUniques = [];
    for (let i = 0; i < col; i++) {
        let tmp = [];
        for (let j = 0; j < row; j++) {
            tmp.push(relation[j][i]);
        }
        const set = new Set(tmp);
        if (tmp.join('+') === [...set].join('+')) {
            uniques.push(i);
        } else {
            unUniques.push(i);
        }
    }
    return [uniques, unUniques];
}

function combination(arr, num){
    const res = [];
    if(num === 1) return arr.map((v) => [v]);
    for (let i = 0; i < arr.length; i++) {
        const rest = arr.slice(i + 1);
        const combinations = combination(rest, num - 1);
        const attach = combinations.map((combination) => [arr[i], ...combination]);
        res.push(...attach);
    }
    return res;
}

const arrCombination = unUniques => {
    if (unUniques.length < 2) return false;
    res = [];
    for (let i = 2; i <= unUniques.length; i++) {
        res.push(...combination(unUniques, i));
    }
    return res;
}

const mixer = (relation, arrs, row) => {
    let res = 0;
    let logs = [...arrs];
    for (let i = 0; i < arrs.length; i++) {
        let tmp = [];
        if (logs[i]) {
            for (let j = 0; j < row; j++) {
                let element = relation[j][arrs[i][0]];
                for (let k = 1; k < arrs[i].length; k++) {
                    element += ',' + relation[j][arrs[i][k]]
                }
                tmp.push(element);
            } 
            const set = new Set(tmp);
            /*console.log(logs);
            console.log(logs[i]);
            console.log(tmp);
            console.log(tmp.join('+') === [...set].join('+'));*/
            if (tmp.join('+') === [...set].join('+')) {
                res++;
                logs = logs.map((x) => {
                    if (!x) return x;
                    for (let l = 0; l < logs[i].length; l++) {
                        if (!x.includes(logs[i][l])) return x;
                    }
                    return false;
                })
            }
        }
    }
    return res;
}

const solution = relation => {
    const row = relation.length;
    const col = relation[0].length;
    const [uniques, unUniques] = isUnique(relation, row, col);
    if (unUniques.length === 0) return uniques.length;
    const arrs = arrCombination(unUniques);
    const mix = mixer(relation, arrs, row);
    /*console.log(uniques);
    console.log(unUniques);
    console.log(arrs);
    console.log(mix);*/
    return uniques.length + mix;
}




//testCase
//const relation = [["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]]
const relation = [['a',1,'aaa','c','ng'],['a',1,'bbb','e','g'],['c',1,'aaa','d','ng'],['d',2,'bbb','d','ng']];
//const relation = [["a","aa"],["aa","a"],["a","a"]];
console.log(solution(relation));