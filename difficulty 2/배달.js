const edgeSorting = (N, road) => {
    road = road.map(x => {
        if (x[0] > x[1]) {
            let tmp = [x[1], x[0], x[2]];
            return tmp;
        }
        return x;
    })
    const roads = {};
    for (let i = 1; i < N; i++) {
        roads[i] = [];
    }
    //console.log(roads);
    for (let i = 0; i < road.length; i++) {
        //console.log(road[i][0]);
        //console.log(roads[road[i][0]]);
        roads[road[i][0]].push(road[i]);
    }
    //console.log(roads);
    return roads;
}

const edgeChain = (N, K, roads) =>  {
    //console.log(roads);
    let chains = [...roads['1']].filter(x => x[2] <= K);
    let res = [1];
    for (let i = 0; i < chains.length; i++) {
        res.push(chains[i][1]);
    }
    while (chains.length !== 0) {
        //console.log(chains);
        for (let i = 0; i < chains.length; i++) {
            let to = chains[i][1];
            if (to === N) chains.splice(i, 1, []);
            else {
                //console.log(to);
            let tmp = [];
            for (let j = 0; j < roads[to].length; j++) {
                //let tmp = [];
                /*console.log(chains);
                console.log(`chains[i][2] : ${chains[i][2]}`);
                console.log(`roads[to][j][2] : ${roads[to][j][2]}`);
                console.log(chains[i][2] + roads[to][j][2] <= K);*/
                if (chains[i][2] + roads[to][j][2] <= K) {
                    tmp.push([chains[i][0], roads[to][j][1], chains[i][2] + roads[to][j][2]]);
                    if (!res.includes(roads[to][j][1])) res.push(roads[to][j][1]);
                }
                //console.log(tmp);
                //chains.splice(i, 1, tmp) 
                //console.log(chains);
                //console.log(tmp);
            }
            chains.splice(i, 1, ...tmp);
            //console.log(chains);
            }
            
        }
        //console.log(chains);
        chains = chains.filter(x => x.length !== 0).map(x => x.flat());
    }
    //console.log(roads)
    //console.log(chains);
    //console.log(res);
    return res;
}

const solution = (N, road, K) => {
    let roads = edgeSorting(N, road);
    let res = edgeChain(N, K, roads);
    //console.log(`res: ${res}`);
    return res.length;
}


//testCase
let N = 6;
let road = [[1,2,1],[1,3,2],[2,3,2],[3,4,3],[3,5,2],[3,5,3],[5,6,1]];
let K = 4;

/*let N = 5;
let road = [[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]];
let K = 3;*/

solution(N, road, K);