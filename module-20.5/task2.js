const numbers = [12, 4, 8, 10, 3, 53, 81, 22, -33, -2];

for(let i=0; i<numbers.length; i++){
    if(numbers[i]%2===0){
       console.log('Even no is:', numbers[i])
    }
    else{
        console.log('Not even no:', numbers[i])
    }
}