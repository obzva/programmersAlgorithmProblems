function combination(arr, num){
    const res = [];
    if(num === 1) return arr.map((v) => [v]);
    for (let i = 0; i < arr.length; i++) {
        const rest = arr.slice(i + 1);
        const combinations = combination(rest, num - 1);
        const attach = combinations.map((combination) => [arr[i], ...combination]);
        res.push(...attach);
    }
    /*forEach costs more time
    arr.forEach((v, idx, arr) => {
      const rest = arr.slice(idx+1);
      const combinations = combination(rest, num-1);
      const attach = combinations.map((combination) => [v, ...combination]);
      res.push(...attach);
    })*/
    return res;
  }