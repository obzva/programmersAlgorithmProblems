function gcd(a, b) //GCD Algorithm
{
if (b === 0)
    return a;
return gcd(b, a % b);
}
function solution(n, m) {
    let a = [n, m];
    a.sort((p, q) => p - q);
    let G = gcd(...a);
    return [G, a[0] / G * a[1]];
}