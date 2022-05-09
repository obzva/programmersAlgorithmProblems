const clockWiseSpin = (key) => {
  const M = key.length;
  const newKey = Array.from({ length: M }, () => []);
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < M; j++) {
      newKey[j].push(key[M - 1 - i][j]);
    }
  }
  return newKey;
};

const solution = (key, lock) => {
  const N = lock.length;
  const M = key.length;

  const testMatrix = [];
  for (let i = 0; i < N + 2 * M - 2; i++) {
    testMatrix.push([]);
    for (let j = 0; j < N + 2 * M - 2; j++) {
      testMatrix[i].push(0);
    }
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      testMatrix[M - 1 + i][M - 1 + j] = lock[i][j];
    }
  }
  const testLength = testMatrix.length;
  let angle = 0;
  let checkKey = [...key];
  for (let i = 0; i < testLength - M + 1; i++) {
    for (let j = 0; j < testLength - M + 1; j++) {
      while (angle < 360) {
        let tmp = [];
        for (let k = 0; k < testLength; k++) {
          tmp.push([]);
          tmp[k].push(...testMatrix[k]);
        }
        let goStop = true;
        for (let k = 0; k < M; k++) {
          for (let l = 0; l < M; l++) {
            tmp[i + k][j + l] += checkKey[k][l];
            if (tmp[i + k][j + l] > 1) {
              goStop = false;
              break;
            }
          }
          if (!goStop) break;
        }
        if (goStop) {
          let res = 0;
          for (let k = M - 1; k < testLength - M + 1; k++) {
            for (let l = M - 1; l < testLength - M + 1; l++) {
              res += tmp[k][l];
            }
          }
          if (res === N ** 2) return true;
        }
        checkKey = clockWiseSpin(checkKey);
        angle += 90;
      }
      angle = 0;
    }
  }
  return false;
};

//testCase
const key = [
  [0, 0, 0],
  [1, 0, 0],
  [0, 1, 1],
];
const lock = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];
//clockWiseSpin(key);
console.log(solution(key, lock));
//parallelMove("down", key);
