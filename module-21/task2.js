function number(num){
    if(num%2!==0){
        let result1 = num*2;
        return result1;
    }
    else{
        let result2 = num/2;
        return result2;
    }
}

let theNumber = number(1);
console.log(theNumber)