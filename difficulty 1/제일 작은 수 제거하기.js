function solution(arr) {
    if (arr.length === 1) {
        return [-1];
    } else {
        let index = arr.indexOf(Math.min(...arr));
        arr.splice(index, 1);
        return arr;
    }
}