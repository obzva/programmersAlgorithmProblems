const solution = (numbers) => {
  const N = numbers.length;
  const result = [];
  for (let i = 0; i < N; i++) {
    const number = numbers[i];
    let j = numbers[i] + 1;
    while (true) {
      const XOR = (number ^ j).toString(2);
      const numberOfOne = XOR.split("").filter((x) => x === "1").length;
      if (numberOfOne <= 2 && numberOfOne >= 1) break;
      else j++;
    }
    result.push(j);
  }
  console.log(result);
  return result;
};

//testCase
const numbers = [0, 2, 7, 10**15];
solution(numbers);
