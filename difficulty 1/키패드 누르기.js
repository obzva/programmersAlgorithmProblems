function solution(numbers, hand) {

    const pad = {'*': [1,1], 0: [1,2], '#': [1,3], 7: [2,1], 8: [2,2], 9: [2,3], 4: [3, 1], 5: [3, 2], 6: [3,3], 1: [4,1], 2: [4,2], 3: [4,3]}; //키패드 좌표 값

    let handNow = {left: '*', right: '#', toPress: 0}; //현재 번호와 누를 번호(초기값 설정 위해 0)

    const numLeft = [1, 4, 7]; //왼손과 오른손이 고유하게 각각 담당할 번호
    const numRight = [3, 6, 9];
    
    var answer = [];
    
    for (let i = 0; i < numbers.length; i ++) {
        handNow['toPress'] = numbers[i];
        
        if (numLeft.includes(handNow['toPress'])) {//1,4,7
            answer.push('L');
            handNow['left'] = handNow['toPress'];
        } else if (numRight.includes(handNow['toPress'])) {//3,6,9
            answer.push('R');
            handNow['right'] = handNow['toPress'];
        } else {
           
            let distanceLeft = Math.abs(pad[handNow['toPress']][0] - pad[handNow['left']][0]) + Math.abs(pad[handNow['toPress']][1] - pad[handNow['left']][1]);//왼손까지 거리
            let distanceRight = Math.abs(pad[handNow['toPress']][0] - pad[handNow['right']][0]) + Math.abs(pad[handNow['toPress']][1] - pad[handNow['right']][1]);//오른손까지 거리

            if (distanceLeft === distanceRight) {//양손으로부터 누를 번호까지 거리 같음
                if (hand === 'right') {
                    answer.push('R');
                    handNow['right'] = handNow['toPress']; //양손으로부터 누를 번호까지 거리가 같고 오른손잡이
                } else {
                    answer.push('L');
                    handNow['left'] = handNow['toPress']; ////양손으로부터 누를 번호까지 거리가 같고 왼손잡이
                };
            } else if (distanceLeft < distanceRight) {//왼손이 더 가까울 때
                answer.push('L');
                handNow['left'] = handNow['toPress']; 
            } else {//오른손이 더 가까울 때
                answer.push('R');
                handNow['right'] = handNow['toPress'];
            };
        };
        
    };




    return answer.join('');
};

