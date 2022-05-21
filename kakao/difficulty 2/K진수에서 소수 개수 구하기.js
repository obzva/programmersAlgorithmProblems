const isPrime = (number) => {
  if (number === 1) return false;
  if (number === 2) return true;
  const max = Math.sqrt(number);
  for (let i = 2; i <= max; i++) {
    if (number % i === 0) return false;
  }
  return true;
};

const solution = (n, k) => {
  let res = 0;

  const arr = n.toString(k).split(/0+/);

  for (let i = 0; i < arr.length; i++) {
    let numArrI = 0;
    for (let j = 0; j < arr[i].length; j++) {
      numArrI *= 10;
      numArrI += arr[i].charCodeAt(j) - 48;
    }
    console.log(numArrI);
    if (isPrime(numArrI)) res++;
  }

  return res;
};

//testCase
const [n, k] = [110011, 10];
solution(n, k);
