/* const moving = (maps, currLoc) => {
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
} */

function solution(maps) {
    // 남서북동 순서
    const dy = [1, 0, -1, 0];
    const dx = [0, -1, 0, 1];
    const row = maps.length; // 행
    const col = maps[0].length; // 열
    const visitCount = [...maps].map((r) => r.map((c) => 1));
  
    let temp = 0;
    const queue = [[0, 0]];
    while (queue.length) {
      const [y, x] = queue.shift();
  
      for (let k = 0; k < 4; k++) {
        const ny = y + dy[k];
        const nx = x + dx[k];
        console.log([y, x]);
  
        if (ny >= 0 && nx >= 0 && ny < row && nx < col) {
          if (maps[ny][nx] === 1 && visitCount[ny][nx] === 1) {
            visitCount[ny][nx] = visitCount[y][x] + 1;
            queue.push([ny, nx]);
          }
        }
      }
    }
  
    return visitCount[row - 1][col - 1] === 1 ? -1 : visitCount[row - 1][col - 1];
  }