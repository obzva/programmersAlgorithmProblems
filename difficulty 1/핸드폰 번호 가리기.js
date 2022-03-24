function solution(phone_number) {
    let length = phone_number.length;
    let tmp1 = phone_number.slice(0, length - 4);
    let tmp2 = phone_number.slice(length - 4);
    return '*'.repeat(tmp1.length) + tmp2;
}