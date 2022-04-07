const solution = (cacheSize, cities) => {
    if (cacheSize === 0) {
        return 5 * cities.length;
    }
    cities = cities.map(x => x.toUpperCase());
    let answer = 0;
    let cache = [];
    for (let i = 0; i < cities.length; i++) {
        //Hit
        if (cache.includes(cities[i])) {
            let tmpIdx = cache.indexOf(cities[i]);
            if (tmpIdx === 0) {
                cache = cache.slice(1)
            } else if (tmpIdx === cacheSize - 1) {
                cache.pop();
            } else {
                cache = cache.slice(0, tmpIdx).concat(cache.slice(tmpIdx + 1));
            } 
            cache.push(cities[i]);
            answer += 1;
        }
        //Miss
        else {
            if (cache.length < cacheSize) {
                cache.push(cities[i]);
            } else {
                cache = cache.slice(1)
                cache.push(cities[i]);
            }
            answer += 5;
        }
    }
    return answer;
}