function solution(sizes) {
    let w = 0;
    let h = 0;
    for (let i = 0, length = sizes.length; i < length; i ++) {
        if (sizes[i][0] < sizes[i][1]) {
            sizes[i] = sizes[i].reverse();
        }
        if (sizes[i][0] > w) {
            w = sizes[i][0];
        }
        if (sizes[i][1] > h) {
            h = sizes[i][1];
        }
    }
    return w * h;
}