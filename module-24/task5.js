function  waitingTime(waitingTimes , serialNumber){
    let checkArray = Array.isArray(waitingTimes);
    let checkNumber = typeof serialNumber;
    
    if(checkArray === true && checkNumber === 'number' && serialNumber > waitingTimes.length){
         let total = 0;
         for(let i = 0; i< waitingTimes.length; i++){
            total += waitingTimes[i];
         }
         
         let avgTime = Math.round(total/waitingTimes.length);

         let remainingPeople = (serialNumber- 1 - waitingTimes.length);
         
         let totalTimeRemain = (remainingPeople * avgTime);
         
         return totalTimeRemain;
    }
    else{
        return 'Invalid Input';
    }

}

let output1 = waitingTime([3, 5, 7, 11, 6], 10);
console.log(output1);

let output2 = waitingTime([13, 2], 6);
console.log(output2);

let output3 = waitingTime([13, 2, 6, 7, 10], 6);
console.log(output3);

let output4 = waitingTime([6], 4);
console.log(output4);

let output5 = waitingTime(7, 10);
console.log(output5);

let output6 = waitingTime("[6, 2]", 9);
console.log(output6);

let output7 = waitingTime([7, 8, 3, 4, 5], "9");
console.log(output7);