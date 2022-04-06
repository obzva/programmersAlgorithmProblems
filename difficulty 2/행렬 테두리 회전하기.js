function solution(rows, columns, queries) {
    let answer = [];
    // 행렬 만들기 (행벡터 집합으로)
    let mtx = [];
    for (let i = 0; i < rows; i++) {
        mtx.push([]);
        for (let j = 1; j <= columns; j++) {
            mtx[i].push(columns * i + j);
        }
    }
    // 돌아가는 entries로 하나의 큰 리스트 만들기 -> 한칸씩 밀고 맨 뒤 원소를 앞으로 붙이기 -> 다시 잘라서 mtx에 집어넣어주기
    let rollings =[];
    for (let i = 0; i < queries.length; i++) {
        let a = queries[i][0];
        let b = queries[i][1];
        let c = queries[i][2];
        let d = queries[i][3];
        // 돌아가는 entries를 하나의 긴 리스트로 만들기
        rollings.push([]);
        for (let j = b - 1; j < d; j ++) {
            rollings[i].push(mtx[a - 1][j]);
        }
        if (a + 1 < c) {
            for (let k = a; k < c - 1; k ++) {
                rollings[i].push(mtx[k][d - 1]);
            }
        }
        for (let j = d - 1; j > b - 2; j --) {
            rollings[i].push(mtx[c - 1][j]);
        }
        if (a + 1 < c) {
            for (let k = c - 2; k > a - 1; k --) {
                rollings[i].push(mtx[k][b - 1]);
            }
        }
        // 한칸씩 밀고 맨 뒤 원소를 앞으로 붙이기
        rollings[i] = [rollings[i].pop()].concat(rollings[i]);
        // rollings[i] 원소 중 최소값 answer에 push
        answer.push(Math.min(...rollings[i]));
        //mtx 변형시키기
        let rollA = rollings[i].slice(0, d - b + 1);
        mtx[a - 1].splice(b - 1, rollA.length, ...rollA);
        let rollB = [];
        let rollC = [];
        let rollD = [];
        if (a + 1 < c) {
            rollB = rollings[i].slice(d - b + 1, d - b + c - a);
            rollC = rollings[i].slice(d - b + c - a, 2 * (d - b) + c - a + 1).reverse();
            rollD = rollings[i].slice(2 * (d - b) + c - a + 1, 2 * (d - b + c - a)).reverse();
            for (let k = 0; k < rollB.length; k++) {
                mtx[a + k][d - 1] = rollB[k];
                mtx[a + k][b - 1] = rollD[k];
            }
        } else {
            rollC = rollings[i].slice(d - b + 1, 2 * (d - b + 1)).reverse();
        }
        mtx[c - 1].splice(b - 1, rollC.length, ...rollC);
    }
    //answer return
    return answer;
}

let rows = 6;
let columns = 6;
let queries = [[2,2,5,4],[3,3,6,6],[5,1,6,3]];

solution(rows, columns, queries);