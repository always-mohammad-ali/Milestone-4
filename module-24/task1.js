function calculateTax(income, expenses){
    let result = 0;
    if(income<expenses || income<0 || expenses<0){
        console.log("Invalid Input");
    }
    else{
           result = (income - expenses)*0.20;
    }
    return result;
}

let input1 = calculateTax(10000, 3000);
console.log(input1);

let input2 = calculateTax(34000, 1753);
console.log(input2);

let input3 = calculateTax(5000, 1500);
console.log(input3);

let input4 = calculateTax(-5000, 1000);
console.log(input4);

let input5 = calculateTax(1000, -300);
console.log(input5);

let input6 = calculateTax(1000, 1000);
console.log(input6);

let input7 = calculateTax(100, 3000);
console.log(input7);

