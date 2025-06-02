function randomvalue(max, min){
      
      let result = Math.floor(Math.random() * (max-min+1)) + min;
      return result;
}

// you will get value among 20 to 10 always.
let output = randomvalue(20, 10);
console.log(output);

// you will get value among 100 to 103 always.

let output2 = randomvalue(103, 100);
console.log(output2);

