const numbers = [23, 4, 53, 54];
// console.log(numbers.length)

numbers[1]=32333;
// console.log(numbers);

// push for adding new element in the array through last 

// console.log(numbers[1]);
numbers.push(9999);
numbers.push(44444);
// console.log(numbers);

// you can push multiple element at the same time, but pushing one element is standard

// numbers.push(1, 2, 3, 4, 5);
// console.log(numbers);


// pop = to pull the last element from an array

const namee = ['abul', 'kabul', 'rabul', 'kalum', 'babul'];

console.log(namee);
namee.pop();
console.log(namee);

const nam1 = namee.pop();
console.log(nam1);


// shift used for removing first element from the first order of array and unshift is vice-versa
namee.shift();
console.log(namee);

namee.unshift('sssrahmattttt');
console.log(namee)

