const shiftRow = (obj) => {
  const row = Object.keys(obj).length;
  const newObj = {};
  for (let i = 0; i < row; i++) {
    if (i === 0) newObj[i] = obj[row - 1];
    else newObj[i] = obj[i - 1];
  }
  return newObj;
};

const rotate = (obj) => {
  const row = Object.keys(obj).length;
  const column = Object.keys(obj["0"]).length;
  const newObj = JSON.parse(JSON.stringify(obj));

  //leftEdge
  const tmp1 = obj[0][0];
  for (let i = 0; i < row; i++) {
    if (i === row - 1) newObj[i][0] = null;
    else newObj[i]["0"] = obj[i + 1]["0"];
  }

  //upperEdge
  const tmp2 = obj[0][column - 1];
  for (let i = 1; i < column; i++) {
    if (i === 1) newObj["0"][i] = tmp1;
    else newObj["0"][i] = obj["0"][i - 1];
  }

  //rightEdge
  const tmp3 = obj[row - 1][column - 1];
  for (let i = 1; i < row; i++) {
    if (i === 1) newObj[i][column - 1] = tmp2;
    else newObj[i][column - 1] = obj[i - 1][column - 1];
  }

  //bottomEdge
  for (let i = 0; i < column - 1; i++) {
    if (i === column - 2) newObj[row - 1][i] = tmp3;
    else newObj[row - 1][i] = obj[row - 1][i + 1];
  }
  return newObj;
};

//timeOver and lowAccuracy

/*const rotate = (matrix) => {
  const row = matrix.length;
  const column = matrix[0].length;

  const strip = [];
  for (let i = 0; i < column; i++) {
    strip.push(matrix[0][i]);
  }
  for (let i = 1; i < row - 1; i++) {
    strip.push(matrix[i][column - 1]);
  }
  for (let i = 0; i < column; i++) {
    strip.push(matrix[row - 1][column - 1 - i]);
  }
  for (let i = 1; i < row - 1; i++) {
    strip.push(matrix[row - 1 - i][0]);
  }

  const rotatedStrip = [strip.pop()].concat(strip);

  const result = [];
  result.push([]);
  for (let i = 0; i < rotatedStrip.slice(0, column).length; i++) {
    result[0].push(rotatedStrip.slice(0, column)[i]);
  }
  for (let i = 0; i < row - 2; i++) {
    const tmp = [];
    tmp.push(rotatedStrip[2 * column + row - 2 + i]);
    for (let j = 0; j < matrix[i + 1].length - 2; j++) {
      tmp.push(matrix[i + 1].slice(1, -1)[j]);
    }
    tmp.push(rotatedStrip[column + i]);
    result.push(tmp);
  }
  result.push([]);
  for (
    let i = 0;
    i < rotatedStrip.slice(column + row - 2, 2 * column + row - 2).length;
    i++
  ) {
    result[result.length - 1].push(
      rotatedStrip.slice(column + row - 2, 2 * column + row - 2).reverse()[i]
    );
  }

  return result;
};*/

const solution = (rc, operations) => {
  let obj = {};
  const row = rc.length;
  const column = rc[0].length;

  for (let i = 0; i < row; i++) {
    obj[i] = {};
    for (let j = 0; j < column; j++) {
      obj[i][j] = rc[i][j];
    }
  }
  //for skipping unnecessary operations, made newOperations
  let newOperations = [];
  let shiftRowCount = 0;
  let rotateCount = 0;

  for (let i = 0; i < operations.length; i++) {
    //ShiftRow 생략가능여부 확인
    if (operations[i] === "ShiftRow") {
      //불연속
      if (rotateCount !== 0) {
        for (let i = 0; i < rotateCount; i++) {
          newOperations.push("Rotate");
        }
        rotateCount = 0;
        shiftRowCount++;
      }
      //연속
      else {
        shiftRowCount++;
        //한바퀴돌았는지?
        if (shiftRowCount === row) {
          shiftRowCount = 0;
        }
      }
    }
    //Rotate 생략가능여부 확인
    if (operations[i] === "Rotate") {
      //불연속
      if (shiftRowCount !== 0) {
        for (let i = 0; i < shiftRowCount; i++) {
          newOperations.push("ShiftRow");
        }
        rotateCount++;
        shiftRowCount = 0;
      }
      //연속
      else {
        rotateCount++;
        //한바퀴돌았는지?
        if (shiftRowCount === 4) {
          shiftRowCount = 0;
        }
      }
    }

  }

  if (shiftRowCount !== 0) {
    for (let i = 0; i < shiftRowCount; i++) {
      newOperations.push("ShiftRow");
    }
  }
  if (rotateCount !== 0) {
    for (let i = 0; i < rotateCount; i++) {
      newOperations.push("Rotate");
    }
  }

  for (let i = 0; i < newOperations.length; i++) {
    if (newOperations[i] === "ShiftRow") obj = shiftRow(obj);
    if (newOperations[i] === "Rotate") obj = rotate(obj);
  }

  const result = [];
  for (let i = 0; i < row; i++) {
    result.push(Object.values(obj[i]));
  }
  return result;
};

//testCase
const rc = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

const operations = ["ShiftRow", "Rotate", "ShiftRow", "Rotate"];

solution(rc, operations);
//console.log(shiftRow(rc));
//rotate(rc);
