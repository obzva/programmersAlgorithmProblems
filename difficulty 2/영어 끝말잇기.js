const solution = (n, words) => {
  const container = [];
  let j = 1;
  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];
    const previousWord = container[container.length - 1];
    if (container.includes(currentWord)) {
      return [j, Math.ceil((i + 1) / n)];
    } else if (
      i > 1 &&
      previousWord[previousWord.length - 1] !== currentWord[0]
    ) {
      return [j, Math.ceil((i + 1) / n)];
    } else if (currentWord.length === 1) {
      return [j, Math.ceil((i + 1) / n)];
    } else {
      container.push(currentWord);
      j = j === n ? 1 : j + 1;
    }
  }
  return [0, 0];
};

//testCase
const n = 3;
const words = [
  "tank",
  "kick",
  "know",
  "wheel",
  "land",
  "dream",
  "mother",
  "robot",
  "tank",
];
//console.log(solution(n, words));