function isPrime(x) {
    for (let i = 2; i <= Math.sqrt(x); i ++) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
}