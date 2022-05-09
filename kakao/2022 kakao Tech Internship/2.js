const solution = (q1, q2) => {
    let sum = 0;
    for (let i = 0; i < q1.length; i++) {
      sum += q1[i] + q2[i];
    }
    for (let i = 0; i < q1.length; i++) {
      if (q1[i] > sum / 2 || q2[i] > sum / 2) return -1;
    }
    let result = 0;
    let q1Sum = q1.reduce((p, c) => p + c, 0);
    let q2Sum = q2.reduce((p, c) => p + c, 0);
  
    while (q1Sum !== q2Sum) {
      if (q1Sum < q2Sum) {
        let count = 0;
        let tmp = 0;
        for (let i = 0; i < q2.length; i++) {
          if (tmp < (q2Sum - q1Sum) / 2) {
            tmp += q2[i];
            count++;
          } else {
            break;
          }
        }
        q1Sum += tmp;
        q2Sum -= tmp;
        q1.push(...q2.splice(0, count));
        result += count;
      } else {
        let count = 0;
        let tmp = 0;
        for (let i = 0; i < q1.length; i++) {
          if (tmp < (q1Sum - q2Sum) / 2) {
            tmp += q1[i];
            count++;
          } else {
            break;
          }
        }
        q2Sum += tmp;
        q1Sum -= tmp;
        q2.push(...q1.splice(0, count));
        result += count;
      }
    }
    return result;
  };

//testCase
const [q1, q2] = [
  [1, 1],
  [1, 5],
];
solution(q1, q2);
