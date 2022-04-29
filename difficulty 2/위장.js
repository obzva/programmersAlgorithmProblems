const makeHash = clothes => {
    const obj = {};
    for (let i = 0; i < clothes.length; i++) {
        let key = clothes[i][1];
        if (!obj.hasOwnProperty(key)) {
            obj[key] = 1;
        } else {
            obj[key]++;
        }
    }
    return obj;
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

const solution = clothes => {
    let res = 0;
    let hash = makeHash(clothes);
    console.log(hash);
    let hashKeys = Object.keys(hash);
    console.log(hashKeys);
    for (let i = 1; i <= hashKeys.length; i++) {
        let combs = combination(hashKeys, i);
        console.log(combs);
        for (let j = 0; j < combs.length; j++) {
            combs[j] = combs[j].map(x => hash[x]);
        }
        console.log(combs);
        for (let j = 0; j < combs.length; j++) {
            res += combs[j].reduce((p,c) => p * c, 1);
        }
    }
    console.log(res);
    return res;
}

//testCase
//let clothes = [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]];
//let clothes = [['a', 'a'], ['b','b'], ['c', 'c'], ['d','d'], ['e','e'], ['f', 'f'], ['g', 'g']];
solution(clothes);