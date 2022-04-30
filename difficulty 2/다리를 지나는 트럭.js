const solution = (bridge_length, weight, truck_weights) => {
    let time = 1;
    const truckNumber = truck_weights.length;
    let onBridge = [[0, 1]];
    let weightOnBridge = truck_weights[0];
    let j = 1;

    //console.log(time);
    //console.log(onBridge);
    //console.log(weightOnBridge);

    while (onBridge.length > 0) {
        time++;

        onBridge = onBridge.map(x => [x[0], x[1] + 1]);
        for (let i = 0; i < onBridge.length; i++) {
            if (onBridge[i][1] > bridge_length) {
                weightOnBridge -= truck_weights[onBridge[i][0]];
            }
        }
        onBridge = onBridge.filter(x => x[1] <= bridge_length);


        
        if (weightOnBridge + truck_weights[j] <= weight) {
            weightOnBridge += truck_weights[j];
            onBridge.push([j, 1]);
            j++;
        } else { //시간 점프하는게 핵심임
            if (onBridge.length !== 0) {
                let jump = bridge_length - onBridge[0][1];
                onBridge = onBridge.map(x => [x[0], x[1] + jump])
                time += jump;
            }
            
        }
        

        /*console.log(time);
        console.log(onBridge);
        console.log(weightOnBridge);*/
    }

    return time;
}

let bridge_length = 2;
let weight = 10;
let truck_weights = [7,4,5,6];
solution(bridge_length, weight, truck_weights);