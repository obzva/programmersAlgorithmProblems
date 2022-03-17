function solution(s) {
    const object1 = {'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4', 'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9'};
    let answer = s

    for (let property in object1) {
        while (answer.includes(property)) {
            answer = answer.replace(property, object1[property]);
        };
    };
    
    return Number(answer);
};

/*let s = "one4seveneight"
console.log(solution(s))*/

/* 다른사람풀이

function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}*/