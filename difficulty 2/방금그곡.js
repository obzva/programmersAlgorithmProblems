//멜로디나 곡의 악보를 array로 바꾸어주는 함수
const splitter = melody => {
    //일단 계이름과 # 상관 없이 다 쪼개기
    let justSplitted = melody.split('');
    let res = [];
    //계이름이면 array에 push해주고 #이면 array 마지막 element를 lowerCase로
    for (let i = 0; i < justSplitted.length; i++) {
        if (justSplitted[i] !== '#') {
            res.push(justSplitted[i]);
        } else {
            res[res.length - 1] = res[res.length - 1].toLowerCase();
        }
    }
    return res;
}

//효율적이지 않음
/*const matchChecker = (m, musicPlayed) => {
    //곡의 악보에 멜로디 첫 음도 없으면 그냥 이 곡이 아닌거임
    if (!musicPlayed.includes(m[0])) return false;
    //곡의 악보에서 멜로디가 들어있는지 판단하기
    let searched = musicPlayed
    .map((x, i) => {
        if (x === m[0]) {
            return i;
        } else {
            return false;
        }
    })
    .filter(x => Number.isInteger(x))
    .map(x => {
        let str = ''
        for (let i = 0; i < m.length; i++) {
            str = str.concat(musicPlayed[x + i]);
        }
        return str;
    })
    .filter(x => x === m.join(''))
    return searched.length > 0 ? true : false;
}*/

//곡의 악보에 멜로디가 포함되어 있는지 찾는 함수
const matchChecker = (m, musicPlayed) => {
    musicPlayed = musicPlayed.join('');
    m = m.join('');
    return musicPlayed.includes(m) ? true : false;
}

const solution = (m, musicinfos) => {
    //멜로디 쓰기 편하게 array로 편집하기
    m = splitter(m);
    //musicinfos도 쓰기 편하게 [[제목, 악보array], [...], [...], ...]로 편집하고 라디오에 먼저 방송된 순서로 sort
    musicinfos = musicinfos
        .map(x => {
            x = x.split(',');
            let startTime = 60 * Number(x[0].split(':')[0]) + Number(x[0].split(':')[1]);
            let endTime = 60 * Number(x[1].split(':')[0]) + Number(x[1].split(':')[1]);
            let playTime = endTime - startTime;
            let musicTitle = x[2];
            let musicScore = splitter(x[3]);
            let musicLength = musicScore.length;
            let musicPlayed = [];
            for (let i = 0; i < playTime; i++) {
                musicPlayed.push(musicScore[i % musicLength])
            }
            return [musicTitle, musicPlayed, startTime];
        })
        .sort((a, b) => a[2] - b[2]);
    //matchChecker를 통과한 노래를 '노래제목: 악보길이' 형식으로 object에 담기
    let searchedMusics = {};
    for (let i = 0; i < musicinfos.length; i++) {
        if (matchChecker(m, musicinfos[i][1])) {
            searchedMusics[musicinfos[i][0]] = musicinfos[i][1].length;
        }
    }
    //하나도 안 나왔으면 '(None)' return
    if (Object.keys(searchedMusics).length === 0) return "(None)";
    //matchChecker를 통과한 노래들 중 악보가 가장 긴 노래의 제목 return
    let lengthMax = Math.max(...Object.values(searchedMusics));
    return Object.keys(searchedMusics)[Object.values(searchedMusics).indexOf(lengthMax)]
}

//testcase
let m = "CCB";
let musicinfos = ["03:00,03:10,FOO,CCB#CCB", "04:00,04:08,BAR,ABCCB", "04:20,04:30,TAR,ABCDEDECCBDE"];
console.log(solution(m, musicinfos));