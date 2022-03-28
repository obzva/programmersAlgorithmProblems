function solution(record) {
    record = record.map(x => x.split(' ')); // [(Enter, Leave, Change) , ID, 닉네임] 으로 mapping
    
    let idObj = {}; // ID와 닉네임 저장할 빈 오브젝트 생성

    let result = [];

    for (let i = 0, length = record.length; i < length; i ++) { // ID 저장
        if (record[i][0] === 'Enter' || record[i][0] === 'Change') {
            idObj[record[i][1]] = record[i][2];
        }
    }
    for (let i = 0, length = record.length; i < length; i ++) {
        if (record[i][0] === 'Enter') {
            result.push(`${idObj[record[i][1]]}님이 들어왔습니다.`);
        }
        if (record[i][0] === 'Leave') {
            result.push(`${idObj[record[i][1]]}님이 나갔습니다.`)
        }
    }
    return result;
}

record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"];
console.log(solution(record));