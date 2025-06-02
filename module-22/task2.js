function searchNum(number, target){
    let count = 0;
   for(let i = 0; i<number.length; i++){
    if(number[i]===target){
        count++;
    }
   }
   return count;
}

let theNum = [5, 6, 8, 23, 5, 11, 5, 11, 5,8, 22, 5, 11, 333, 88, 333, 88];
let result1 = searchNum(theNum, 11)

console.log('Total number of 11 is ',result1);

let result3 = searchNum(theNum, 333);
console.log('Total number of 333 is ',result3)

let result4 = searchNum(theNum, 88);
console.log('Total number of 88 is ',result4)

let result5 = searchNum(theNum, 8);
console.log('Total number of 8 is ',result5)