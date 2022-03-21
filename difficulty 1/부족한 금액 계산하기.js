function solution(price, money, count) {
    let sum = 0;
    for (let i = 1; i <= count; i ++) {
        sum += i;
    }
    if (money > price * sum) {
        return 0;
    }
    return price * sum - money;
}

/* 가우스공식과 삼항 조건 연산자를 사용한 코딩
function solution(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}*/