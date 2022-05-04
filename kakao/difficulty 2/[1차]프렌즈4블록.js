const getColumns = (m, n, board) => {
  const columns = [];
  for (let i = 0; i < n; i++) {
    columns.push([]);
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      columns[j].push(board[i][j]);
    }
  }
  return columns;
};

const getSquare = (columns) => {
  const m = columns[0].length;
  const n = columns.length;
  const squareIdx = [];
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < m - 1; j++) {
      if (!columns[i][j]) continue;
      if (
        columns[i][j] === columns[i][j + 1] &&
        columns[i][j] === columns[i + 1][j] &&
        columns[i][j + 1] === columns[i + 1][j + 1]
      ) {
        if (!squareIdx.includes(String(i) + "," + String(j)))
          squareIdx.push(String(i) + "," + String(j));
        if (!squareIdx.includes(String(i + 1) + "," + String(j)))
          squareIdx.push(String(i + 1) + "," + String(j));
        if (!squareIdx.includes(String(i) + "," + String(j + 1)))
          squareIdx.push(String(i) + "," + String(j + 1));
        if (!squareIdx.includes(String(i + 1) + "," + String(j + 1)))
          squareIdx.push(String(i + 1) + "," + String(j + 1));
      }
    }
  }
  return squareIdx.map((x) => x.split(","));
};

const deleteSquare = (columns, squareIdx) => {
  for (let i = 0; i < squareIdx.length; i++) {
    columns[squareIdx[i][0]].splice(squareIdx[i][1], 1, false);
  }
  columns = columns.map((column) => {
    let len = column.length;
    let tmp = column.filter((x) => x);
    let falses = [];
    for (let i = 0; i < len - tmp.length; i++) falses.push(false);
    return falses.concat(tmp);
  });
  return columns;
};

const solution = (m, n, board) => {
  let res = 0;
  let columns = getColumns(m, n, board);

  while (getSquare(columns).length > 0) {
    columns = deleteSquare(columns, getSquare(columns));
  }
  for (let i = 0; i < columns.length; i++) {
    res += columns[i].reduce((cnt, element) => cnt + !element, 0);
  }
  //console.log(res);
  return res;
};

//testCase
let [m, n, board] = [
  6,
  6,
  ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"],
];
solution(m, n, board);
