const getNodes = name => {
    let nodes = [];
    for (let i = 0; i < name.length; i++) {
        if (name[i] !== 'A' || i === 0) {
            nodes.push(i);
        }
    }
    return nodes;
}

const getEdges = (name, nodes) => {
    if (nodes[0] === 0 && nodes.length === 1) return 0;
    let edges = [];
    for (let i = 0; i < nodes.length; i++) {
        edges.push(i !== nodes.length - 1 ? nodes[i + 1] - nodes[i] : name.length - nodes[i]);
    }
    return edges;
}

const findPaths = (edges) => {
    if (edges === 0) return 'stop';
    let list = [['forth'], ['back']];
    while (list[0].length !== edges.length - 1) {
        let length = list.length;
        let tmp = [];
        for (let i = 0; i < length; i++) {
            tmp.push([...list[i], 'forth']);
            tmp.push([...list[i], 'back']);
        }
        list = tmp;
    }
    return list;
}

const calculator = (edges, paths) => {
    let len = paths.length;
    let pathLen = paths[0].length;
    let arr = [];
    for (let i = 0; i < len; i++) {
        let res = 0;
        let itEdges = [...edges];
        for (let j = 0; j < pathLen; j++) {
            if (paths[i][j] === 'forth') {
                res += itEdges[0];
                let tmp = edges[0];
                itEdges = itEdges.slice(1);
                itEdges[itEdges.length - 1] += tmp;
            } else {
                res += itEdges[itEdges.length - 1];
                itEdges[0] += itEdges.pop();
            }
        }
        arr.push(res);
    }

    return Math.min(...arr);
    /*let res = 0;
    while(edges.length !== 1) {
        if (edges[0] <= edges[edges.length - 1]) {
            res += edges[0];
            let tmp = edges[0];
            edges = edges.slice(1);
            edges[edges.length - 1] += tmp;
        } else {
            res += edges[edges.length - 1];
            edges[0] += edges.pop();
        }
    }
    return res;*/
}

const solution = name => {
    let res = 0;
    let nodes = getNodes(name);
    for (let i = 0; i < nodes.length; i++) {
        res += Math.min(name.charCodeAt(nodes[i]) - 65, 91 - name.charCodeAt(nodes[i]));
    }
    let edges = getEdges(name, nodes);
    let paths = findPaths(edges);
    if (paths === 'stop') return res;
    let moves = calculator(edges, paths);
    return res + moves;
}



//testCase
let nameTest = "BAAAB";
let nodes = getNodes(nameTest);
let edges = getEdges(nameTest, nodes);
console.log(`nodes = ${nodes}`);
console.log(`edges = ${edges}`);
console.log(`paths = ${findPaths(edges)}`);
console.log(`solution = ${solution(nameTest)}`);



/* const solution = name => {
    //경로는 두 가지
    let path1 = [];
    for (let i = 0; i < name.length; i++) {
        path1.push(i);
    }
    let path2 = [0].concat(path1.slice(1).reverse());

    //위아래 얼마나 움직여야하는지
    let upDown1 = path1.map(x => Math.min(name.charCodeAt(x) - 65, 91 - name.charCodeAt(x)));
    let upDown2 = path2.map(x => Math.min(name.charCodeAt(x) - 65, 91 - name.charCodeAt(x)));

    //움직임 더하기
    //path1
    let res1 = upDown1[0];
    for (let i = 1; i < name.length; i++) {
        //나머지 얘들이 안 움직여도 되면 무빙 안 더하구 아니면 무빙 더하기
        if (upDown1.slice(i).reduce((p, c) => p + c, 0) !== 0) {
            res1 ++;
            //upDown 움직임 더하기
            res1 += upDown1[i];
        } else {
            break;
        }
    }
    //path2
    let res2 = upDown2[0];
    for (let i = 1; i < name.length; i++) {
        //나머지 얘들이 안 움직여도 되면 무빙 안 더하구 아니면 무빙 더하기
        if (upDown2.slice(i).reduce((p, c) => p + c, 0) !== 0) {
            res2 ++;
            //upDown 움직임 더하기
            res2 += upDown2[i];
        } else {
            break;
        }
    }
    return Math.min(res1, res2);
} */