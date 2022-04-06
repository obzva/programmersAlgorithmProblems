const moving = (maps, currLoc) => {
    if (maps[currLoc[0]][currLoc[1] + 1] === 1) {
        return [currLoc[0], currLoc[1] + 1];
    } else {
        if (maps[currLoc[0] + 1][currLoc[1]] === 1) {
            return [currLoc[0] + 1, currLoc[1]];
        } else {
            if (maps[currLoc[0] - 1][currLoc[1]] === 1) {
                return [currLoc[0] - 1, currLoc[1]];
            }
        }
    }
}

const solution = maps => {
    let n = maps[0].length;
    let m = maps.length;
    //가장자리 벽으로 채워주기
    let wall = [];
    for (let i = 0; i < n + 2; i++) {
        wall.push(0);
    }
    for (let j = 0; j < m; j++) {
        maps[j] = [0].concat(maps[j], [0]);
    }
    maps = [wall].concat(maps, [wall]);
    //처음 좌표 1,1 목적지 좌표 n,m
    let currLoc = [1, 1];
    let answer = 1;
    while (true) {
        if (currLoc[1] === m && maps[currLoc[0] + 1][currLoc[1]] === 0) return -1;
        if (currLoc[0] === n && maps[currLoc[0] - 1][currLoc[1]] === 0 && maps[currLoc[0]][currLoc[1] + 1] === 0) return -1;
        currLoc = moving(maps, currLoc);
        answer ++;
        if (currLoc[0] === n && currLoc[1] === m) return answer;
    }
}