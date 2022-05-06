/*const divide = (file) => {
  const regexpHead = /\D(?=\d)/;
  const regexpNumb = /\d(?=\D)/;

  const head = file.slice(0, file.match(regexpHead).index + 1).toUpperCase();

  let number =
    file.match(regexpNumb) === null
      ? file.slice(file.match(regexpHead).index + 1)
      : file.slice(
          file.match(regexpHead).index + 1,
          file.match(regexpNumb).index + 1
        );
  number = number[0] === "0" ? Number(number.slice(1)) : Number(number);

  return { file: file, head: head, number: number };
};

const compareFnHead = (a, b) => {
  if (a["head"] < b["head"]) return -1;
  if (a["head"] > b["head"]) return 1;
  return 0;
};

const compareFnNumb = (a, b) => {
  if (compareFnHead(a, b) === 0) {
    if (a["number"] < b["number"]) return -1;
    if (a["number"] > b["number"]) return 1;
    return 0;
  } else return 0;
};*/

//성능 훨씬 구림

const compareFn = (a, b) => {
  const regexp = /(\D*)([0-9]*)/i;
  const A = a.match(regexp);
  const B = b.match(regexp);
  const compareHead = A[1].toUpperCase().localeCompare(B[1].toUpperCase());
  const comapreNumb = (aNumb, bNumb) => {
    return Number(aNumb) < Number(bNumb)
      ? -1
      : Number(aNumb) > Number(bNumb)
      ? 1
      : 0;
  };
  return compareHead === 0 ? comapreNumb(A[2], B[2]) : compareHead;
};

const solution = (files) => {
  let res = [...files];
  res.sort(compareFn);
  return res;
};

//testCase
const files = [
  "F-5 Freedom Fighter",
  "B-50 Superfortress",
  "A-10 Thunderbolt II",
  "F-14 Tomcat",
];
solution(files);
