let result = 0;
let avgg;
function make_avg(arrayNum){
    for(let i=0; i<arrayNum.length; i++){
        result = result + arrayNum[i];
    }
    avgg = result / arrayNum.length;
    return avgg;
}

let theArray = [10, 10, 10, 10, 10];
make_avg(theArray);
console.log(avgg);