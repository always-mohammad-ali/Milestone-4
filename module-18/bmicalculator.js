let weight = 86;
let height = 1.7272;

let bmi = 86/(1.7272*2);

console.log("My bmi is: ",bmi);

if(bmi<18.5){
    console.log("you are underweight");
}
else if(bmi>=18.5 && bmi<=24.9){
    console.log("you are okay, bcz your bmi is:", bmi);
}
else{
    console.log("you are overweight");
}