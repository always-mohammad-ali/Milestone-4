function celToFar(celvalue){
    let  result = (celvalue * 1.8)+32;
    return result;
}

let theValue = 100;
let result1 = celToFar(theValue);

console.log(result1)

let result2 = celToFar(50);
console.log(result2)

let result3 = celToFar(10);
console.log(result3)