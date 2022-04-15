const solution = grid => {
    let row = grid.length;
    let col = grid[0].length;
    //방향
    let dirs = [[1, 0], [0, -1], [-1, 0], [0, 1]];
    let cycles = [];
    //경로 그리드를 생성
    let dirGrid = [];
    for (let i = 0; i < row; i++) {
        dirGrid.push([]);
        for (let j = 0; j < col; j++) {
            dirGrid[i].push([true, true, true, true]);
        }
    }

    const counter = (fromLoc, toLoc) => {
        let count = 0;
        while (true) {
            //경로 이탈 보정!!!
                //북쪽으로 벗어났을 때
                if (toLoc[0] < 0) {
                    fromLoc[0] = row;
                    toLoc[0] = row - 1;
                }
                //동쪽으로 벗어났을 때
                if (toLoc[1] > col - 1) {
                    fromLoc[1] = -1;
                    toLoc[1] = 0;
                }
                //남쪽으로 벗어났을 때
                if (toLoc[0] > row - 1) {
                    fromLoc[0] = -1;
                    toLoc[0] = 0;
                }
                //서쪽으로 벗어났을 때
                if (toLoc[1] < 0) {
                    fromLoc[1] = col;
                    toLoc[1] = col - 1;
                }
                //console.log(`fromLoc = ${fromLoc}`);
                //console.log(`toLoc = ${toLoc}`);
            //경로 기록!!!
                let dir = 0;
                //북쪽에서 왔을 때
                if (toLoc[0] > fromLoc[0]){
                    if (!dirGrid[toLoc[0]][toLoc[1]][0]) {
                        break;
                    }
                    dirGrid[toLoc[0]][toLoc[1]][0] = false;
                    count++;
                    dir = 0;
                }
                //동쪽에서 왔을 때
                if (toLoc[1] < fromLoc[1]){
                    if (!dirGrid[toLoc[0]][toLoc[1]][1]) {
                        break;
                    }
                    dirGrid[toLoc[0]][toLoc[1]][1] = false;
                    count++;
                    dir = 1;
                }
                //남쪽에서 왔을 때
                if (toLoc[0] < fromLoc[0]){
                    if (!dirGrid[toLoc[0]][toLoc[1]][2]) {
                        break;
                    }
                    dirGrid[toLoc[0]][toLoc[1]][2] = false;
                    count++;
                    dir = 2;
                }
                //서쪽에서 왔을 때
                if (toLoc[1] > fromLoc[1]){
                    if (!dirGrid[toLoc[0]][toLoc[1]][3]) {
                        break;
                    }
                    dirGrid[toLoc[0]][toLoc[1]][3] = false;
                    count++;
                    dir = 3;
                }
            //mover에 따라 다음 경로 설정
                //S일 경우
                if (grid[toLoc[0]][toLoc[1]] === 'S') {
                    nextLoc = [toLoc[0] + dirs[dir][0], toLoc[1] + dirs[dir][1]];
                }
                //L일 경우
                if (grid[toLoc[0]][toLoc[1]] === 'R') {
                    dir++;
                    if (dir > 3) {
                        dir = 0;
                    }
                    nextLoc = [toLoc[0] + dirs[dir][0], toLoc[1] + dirs[dir][1]];
                }
                //R일 경우
                if (grid[toLoc[0]][toLoc[1]] === 'L') {
                    dir--;
                    if (dir < 0) {
                        dir = 3;
                    }
                    nextLoc = [toLoc[0] + dirs[dir][0], toLoc[1] + dirs[dir][1]];
                }
            //다음 경로
                fromLoc = toLoc;
                //console.log(`converted fromLoc = ${fromLoc}`)
                toLoc = nextLoc;
                //console.log(`converted toLoc = ${nextLoc}`)
        }
        return count;
    }

    //각 좌표에 대해서
    for (let k = 0; k < row; k++) {
        for (let l = 0; l < col; l++) {
            //각 방향에 대해서
            for (let m = 0; m < 4; m ++) {
                //처음 시작점과 도착점
                let startFromLoc = [k, l];
                let startToLoc = [k + dirs[m][0], l + dirs[m][1]];
                cycles.push(counter(startFromLoc, startToLoc));
            }
        }
    }
    return cycles.filter(x => x > 0).sort((a, b) => a - b);
}




let grid = ["SL","LR"];
console.log(solution(grid));
