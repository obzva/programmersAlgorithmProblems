const solution = (cacheSize, cities) => {
  cities = cities.map((x) => x.toUpperCase());
  let res = 0;
  let cache = [];
  const N = cities.length;
  if (cacheSize === 0) return N * 5;
  for (let i = 0; i < N; i++) {
    //HIT
    if (cache.includes(cities[i])) {
      cache.splice(cache.indexOf(cities[i]), 1);
      cache.push(cities[i]);
      res++;
    }
    //MISS
    else {
      if (cache.length < cacheSize) {
        cache.push(cities[i]);
      } else {
        cache = cache.slice(1);
        cache.push(cities[i]);
      }
      res += 5;
    }
  }
  return res;
};

//testCase
const [cacheSize, cities] = [
  3,
  [
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
  ],
];
solution(cacheSize, cities);
