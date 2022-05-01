const solution = citations => {

    let res = 0;
    const citationsLength = citations.length;
    const max = Math.max(...citations) > citationsLength ? citationsLength : Math.max(...citations);
    for (let i = max; i >= 0; i--) {
        let tmp = citations.filter(x => x >= i).length;
        if (tmp >= i) {
            return i;
        }
    }
}

//testCase
let citations = [10, 10, 10, 10, 10];
console.log(solution(citations));