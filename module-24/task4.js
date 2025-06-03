function calculateFinalScore(obj){
    
    if(typeof obj !== 'object'){
        
        return 'Invalid input';
    }


    let farmerValue = 0;
    if(obj.isFFamily === true){
        farmerValue = 20;
    }
    else{
        farmerValue = 0;
    }
    
    let totalPoint = 0;
    totalPoint = obj.testscore + obj.schoolGrade + farmerValue;

    if(totalPoint>=80){
        return true;
    }
    else{
        return false;
    }


}

let input1 = {
    name: 'Rajib',
    testscore: 45,
    schoolGrade: 25,
    isFFamily: true
}
let output1 = calculateFinalScore(input1);
console.log(output1);


let input2 = {
    name: 'Rajib',
    testscore: 45,
    schoolGrade: 25,
    isFFamily: false
}
let output2 = calculateFinalScore(input2);
console.log(output2);

let input3 = {
    name: 'Rajib',
    testscore: 15,
    schoolGrade: 25,
    isFFamily: true
}
let output3 = calculateFinalScore(input3);
console.log(output3);

let input4 = 'hello';
let output4 = calculateFinalScore(input4);
console.log(output4);