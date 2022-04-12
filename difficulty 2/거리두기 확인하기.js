/* Programmers에 제출하면 partitionCheck 함수에서 places가 정의되어 있지 않아 오류가 남. 따라서 아래 두 함수를 solution 함수에 집어 넣음.
const manhattan = (p, q) => {
    let dy = Math.abs(p[0] - q[0]);
    let dx = Math.abs(p[1] - q[1]);
    return dx + dy;
}

const partitionCheck = (p , q, i) => {
    //같은 열인 경우
    if (p[1] === q[1]) {
        if (places[i][Math.min(p[0], q[0]) + 1][p[1]] === 'X') {
            return true;
        } else {
            return false;
        }
        
    } 
    //같은 행인 경우
    else if (p[0] === q[0]){
        if (places[i][p[0]][Math.min(p[1], q[1]) + 1] === 'X') {
            return true;
        } else {
            return false;
        }
    }
    //행과 열이 다른 경우
    else {
        let minR = Math.min(p[0], q[0]);
        let maxR = Math.max(p[0], q[0]);
        let minC = Math.min(p[1], q[1]);
        let maxC = Math.max(p[1], q[1]);
        if ((places[i][minR][minC] === 'X' && places[i][maxR][maxC] === 'X') || (places[i][minR][maxC] === 'X' && places[i][maxR][minC] === 'X')) {
            return true;
        } else {
            return false;
        }
    }
}
*/

const solution = places => {
    const manhattan = (p, q) => {
        let dy = Math.abs(p[0] - q[0]);
        let dx = Math.abs(p[1] - q[1]);
        return dx + dy;
    }
    
    const partitionCheck = (p , q, i) => {
        //같은 열인 경우
        if (p[1] === q[1]) {
            if (places[i][Math.min(p[0], q[0]) + 1][p[1]] === 'X') {
                return true;
            } else {
                return false;
            }
            
        } 
        //같은 행인 경우
        else if (p[0] === q[0]){
            if (places[i][p[0]][Math.min(p[1], q[1]) + 1] === 'X') {
                return true;
            } else {
                return false;
            }
        }
        //행과 열이 다른 경우
        else {
            let minR = Math.min(p[0], q[0]);
            let maxR = Math.max(p[0], q[0]);
            let minC = Math.min(p[1], q[1]);
            let maxC = Math.max(p[1], q[1]);
            if ((places[i][minR][minC] === 'X' && places[i][maxR][maxC] === 'X') || (places[i][minR][maxC] === 'X' && places[i][maxR][minC] === 'X')) {
                return true;
            } else {
                return false;
            }
        }
    }
    let answer = [1, 1, 1, 1, 1];
    //응시자들의 좌표값을 담은 obj를 생성
    objPlaces = {};
    for (let i = 0; i < 5; i++) {
        objPlaces[i] = {};
        let tmp = 0;
        for (let j = 0; j < 5; j++) {
            for (let k = 0; k < 5; k++) {
                if (places[i][j][k] === 'P') {
                    objPlaces[i][tmp] = [j, k];
                    tmp++;
                }
            }
        }
    }
    //각 공간에서 combination으로 서로 간의 맨해튼 거리 계산
    for (let i = 0; i < 5; i++) {
        let len = Object.keys(objPlaces[i]).length;
        for (let j = 0; j < len; j++) {
            for (let k = j + 1; k < len; k ++ ) {
                //맨해튼 거리가 2인 경우 파티션이 있는지 체크
                if (manhattan(objPlaces[i][j], objPlaces[i][k]) === 2) {
                    if (!partitionCheck(objPlaces[i][j], objPlaces[i][k], i)) {
                        answer[i] = 0;
                    }
                } 
                //맨해튼 거리가 2보다 작은 경우
                else if (manhattan(objPlaces[i][j], objPlaces[i][k]) < 2) {
                    answer[i] = 0;
                }
            }
        }
    }
    return answer;
}

//testcase
let places = [["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]];

console.log(solution(places));
