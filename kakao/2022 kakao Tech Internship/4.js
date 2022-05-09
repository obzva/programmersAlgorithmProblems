const DFS = (graph, startNode) => {
  const visited = [];
  let needVisit = [];
  let intensity = 0;

  needVisit.push(startNode);

  while (needVisit.length !== 0) {
    const node = needVisit.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      /*intensity = Math.max(
          intensity,
          Number(
            timeCosts[
              [visited[visited.length - 2], visited[visited.length - 1]]
            ]
          )
        );*/
      needVisit = [...graph[node], ...needVisit];
    }
  }
  return [visited, intensity];
};

const solution = (n, paths, gates, summits) => {
  const graph = {};
  const timeCosts = {};

  for (let i = 0; i < n; i++) {
    graph[i + 1] = [];
  }
  for (let i = 0; i < paths.length; i++) {
    graph[paths[i][0]].push(paths[i][1]);
    graph[paths[i][1]].push(paths[i][0]);
    timeCosts[[paths[i][0], paths[i][1]]] = paths[i][2];
    timeCosts[[paths[i][1], paths[i][0]]] = paths[i][2];
  }

  for (let i = 0; i < gates.length; i++) {
    const startNode = gates[i];
    const [route, intensity] = DFS(graph, timeCosts, startNode);
    console.log(route);
    console.log(intensity);
  }
};

//testCase
const [n, paths, gates, summits] = [
  6,
  [
    [1, 2, 3],
    [2, 3, 5],
    [2, 4, 2],
    [2, 5, 4],
    [3, 4, 4],
    [4, 5, 3],
    [4, 6, 1],
    [5, 6, 1],
  ],
  [1, 3],
  [5],
];
solution(n, paths, gates, summits);
