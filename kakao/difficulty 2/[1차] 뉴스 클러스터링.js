const solution = (str1, str2) => {
    str1 = str1.toUpperCase();
    str2 = str2.toUpperCase();
    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < str1.length - 1; i++) {
        arr1.push(str1.slice(i, i + 2));
    }
    for (let i = 0; i < str2.length - 1; i++) {
        arr2.push(str2.slice(i, i + 2));
    }
    arr1 = arr1.filter(x => !(x.match(/[^A-Z]/)));
    arr2 = arr2.filter(x => !(x.match(/[^A-Z]/)));
    if (arr1.length === 0 && arr2.length === 0) return 65536;
    let obj1 = {};
    let obj2 = {};
    for (let i = 0; i < arr1.length; i++) {
        obj1[arr1[i]] = (obj1[arr1[i]] | 0) + 1;
    }
    for (let i = 0; i < arr2.length; i++) {
        obj2[arr2[i]] = (obj2[arr2[i]] | 0) + 1;
    }
    let intsct = Object.keys(obj1).filter(x => Object.keys(obj2).includes(x));
    let numIntsct = 0;
    for (let i = 0; i < intsct.length; i++) {
        numIntsct += Math.min(obj1[intsct[i]], obj2[intsct[i]]);
    }
    return Math.floor(numIntsct / (Object.values(obj1).reduce((p, c) => p + c, 0) + Object.values(obj2).reduce((p, c) => p + c, 0) - numIntsct) * 65536);
}

let str1 = 'FRANCE', str2 = 'french';
solution(str1, str2);