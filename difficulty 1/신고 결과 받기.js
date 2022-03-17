function solution(id_list, report, k) {
    var answer = new Array(id_list.length);
    answer.fill(0);
    
    const reportLog = {}
    
    id_list.forEach(x => {
        reportLog[x] = [];
    });
    
    report.forEach(x => {
        const [reporter_id, reported_id] = x.split(' ');
        if (!reportLog[reported_id].includes(reporter_id)) {
            reportLog[reported_id].push(reporter_id);
        };
    });
    
    for (const key in reportLog) {
        if (reportLog[key].length >= k) {
            reportLog[key].forEach(x => {
                answer[id_list.indexOf(x)] ++;
            })
        };
    };
    
    return answer;
};