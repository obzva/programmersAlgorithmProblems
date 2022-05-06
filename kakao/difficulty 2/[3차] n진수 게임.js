const solution = (n, t, m, p) => {
  let i = 0;
  let j = 0;
  const res = [];
  while (res.length < t) {
    let tmp = i.toString(n);
    for (let k = 0; k < tmp.length; k++) {
      if (j % m === p - 1 && res.length < t) res.push(tmp[k].toUpperCase());
      j++;
    }
    i++;
  }
  return res.join("");
};
