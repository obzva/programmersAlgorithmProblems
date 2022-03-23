function solution(n) {
    let divs = [];
    for (let i = 0; i <= Math.sqrt(n); i ++) {
        if (n % i === 0) {
            divs.push(i);
            if (n !== i ** 2) {
                divs.push(n / i);
            }
        }
    }
    console.log(divs);
    return divs.reduce((p, c) => p + c, 0);
}