function findLowest(num){
     let temp = num[0];
     
     for(let i=0; i<num.length; i++){
        if(num[i]<temp){
            temp=num[i];
        }
     }
     return temp;
}

let number = [23, 5, -1, 45, 2334, -99, 500, -1000];
let output = findLowest(number);

console.log(output);