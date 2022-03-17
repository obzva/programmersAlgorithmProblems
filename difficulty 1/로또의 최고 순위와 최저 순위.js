function solution(lottos, win_nums) {
    
    let prizeTiers = {6: 1, 5: 2, 4: 3, 3: 4, 2: 5}
    
    let low = win_nums.filter(element => {
        return lottos.includes(element);
    }).length;

    
    let zeros = lottos.filter(element => element === 0).length;

    
    let high = low + zeros;

    
    const answer = [(prizeTiers[high] || 6), (prizeTiers[low] || 6)];
    
    return answer;
};