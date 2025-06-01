function odd_even(number){
    if(number%2===0){
        console.log('even')
        return
    }
    else{
        console.log('odd')
        return
    }
}

let num =9;
odd_even(num);

odd_even(12);
odd_even(-1);
odd_even(1);
odd_even(100)