const LRU = (cache = [], cacheSize, userData) => {
    for (let i = 0; i < userData.length; i++) {
        //Hit
        if (cache.includes(userData[i])) {
            let tmpIdx = cache.indexOf(userData[i]);
            if (tmpIdx === 0) {
                cache = cache.slice(1)
            } else if (tmpIdx === cacheSize - 1) {
                cache.pop();
            } else {
                cache = cache.slice(0, tmpIdx).concat(cache.slice(tmpIdx + 1));
            } 
            cache.push(userData[i]);
        }
        //Miss
        else {
            if (cache.length < cacheSize) {
                cache.push(userData[i]);
            } else {
                cache = cache.slice(1)
                cache.push(userData[i]);
            }
        }
    }
}