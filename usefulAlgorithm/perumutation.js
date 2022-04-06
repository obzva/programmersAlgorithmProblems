function permutation(arr, num){
    const res = [];
    if(num === 1) return arr.map((v) => [v]);
    for (let i = 0; i < arr.length; i++) {
        const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
        const permutations = permutation(rest, num - 1);
        const attach = permutations.map((permutation) => [arr[i], ...permutation]);
        res.push(...attach);
    }
    return res;
  }