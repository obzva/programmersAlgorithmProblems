function solution(n) {
  let a = Array(n)
    .fill()
    .map((_, i) => Array(i + 1).fill());
  console.log(a);
  let row = -1;
  let col = 0;
  let fill = 0;
  for (let i = n; i > 0; i -= 3) {
    a[++row][col] = ++fill;
    for (let j = 0; j < i - 1; j++) a[++row][col] = ++fill;
    for (let j = 0; j < i - 1; j++) a[row][++col] = ++fill;
    for (let j = 0; j < i - 2; j++) a[--row][--col] = ++fill;
  }
  console.log(a);
  return a.flat();
}

//testCase
const n = 5;
solution(n);
