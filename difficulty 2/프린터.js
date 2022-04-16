const solution = (priorities, location) => {
    let obj = {};
    let arr = [];
    for (let i = 0; i < priorities.length; i++) {
        obj[i] = priorities[i];
        arr.push(i);
    }
    let printed = [];
    while (!printed.includes(location)) {
        let selected = arr[0];
        if (Math.max(...Object.values(obj)) === obj[selected]) {
            printed.push(selected);
            arr = arr.slice(1);
            delete obj[selected]
        } else {
            arr = arr.slice(1).concat(selected);
        }
    }
    return printed.indexOf(location) + 1;
}

let priorities = [1, 1, 9, 1, 1, 1];
let location = 0;

solution(priorities, location);