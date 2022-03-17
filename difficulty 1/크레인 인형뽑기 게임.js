function solution(board, moves) {

    moves = moves.map(x => x - 1) //index 편하게 쓰려고 1씩 뺌

    let newBoard = []

    for (let i = 0; i < board.length; i ++) {
        newBoard.push([]);
        for (let j = 0; j < board.length; j ++) {
            newBoard[newBoard.length - 1].push(board[j][i]);
        };
        newBoard[i] = newBoard[i].filter(x => x!==0);
    };

    /* matirx의 행과 열을 바꾸는 알고리즘!!!
    const transpose = matrix => matrix.reduce(
  (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
  []
);*/


    console.log(newBoard);

    let bucket = [] //뽑은 녀석 쌓을 바구니

    var answer = 0;

    for (let i = 0; i < moves.length; i ++) {
        let picked = newBoard[(moves[i])].shift(); //picked에 뽑힌 녀석 저장

        console.log(`picked(${i}): ${picked}`)

        if (typeof picked !== "undefined" && picked !== 0) {
            bucket.unshift(picked); //bucket의 앞에 넣기
            console.log(`bucket(${i}): ${bucket}`)

            if (bucket.length >= 2 && bucket[0] === bucket[1]) { //만약 bucket에 쌓인 인형의 개수가 2 개 이상이고 같은 인형이면?
                bucket.splice(0,2); //같은 인형 2개 터뜨리고 answer에 2 추가
            
                answer += 2;
                console.log(`answer(${i}): ${answer}`)
            };
        };
        
    };

    return answer;
};

board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]];

moves = [1,5,3,5,1,2,1,4];

solution(board, moves);