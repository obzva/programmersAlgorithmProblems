const SOE = number => {
    let arr = new Array(number + 1);
    arr.fill(true);
    arr[0] = arr[1] = false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        for (let j = i; i * j <= number; j++) {
            arr[i * j] = false;
        }
    }
    return arr.map((e, i) => {if (e === true) return i}).filter(e => e);
}