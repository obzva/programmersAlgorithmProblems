const EO = number => {
    if (number % 2 === 1) {
        number = (number + 1) / 2;
    } else {
        number = number / 2;
    }
    return number;
}

const solution = (n, a, b) => {
    let round = 0;
    while (a !== b) {
        round++;
        a = EO(a);
        b = EO(b);
    }
    return round;
}