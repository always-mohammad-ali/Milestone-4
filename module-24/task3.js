function checkDigitsInName(name){
     if(typeof name === 'string'){
        let nameArray = name.split('');
        for(let i=0; i<name.length; i++){
          
            if(nameArray[i]>=0 && nameArray[i]<=9){
                return true;
            }
            

        }

        return false;
        
     }

     else{
        return 'Invalid Input';
     }
     
    
}

let input1 = checkDigitsInName('Raj123');
console.log(input1)

let input2 = checkDigitsInName('n9ayeem');
console.log(input2)

let input3 = checkDigitsInName('e1mu3');
console.log(input3)

let input4 = checkDigitsInName('Suman');
console.log(input4)

let input5 = checkDigitsInName('Name2024');
console.log(input5)

let input6 = checkDigitsInName('!@#');
console.log(input6)

let input7 = checkDigitsInName(["Raj"]);
console.log(input7)

let input8 = checkDigitsInName(45);
console.log(input8)
