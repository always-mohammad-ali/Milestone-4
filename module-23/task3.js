function calculateElectronicsBudget(lap, tab, mob){
    let total = lap + tab + mob;
    return total;
}

let output = calculateElectronicsBudget(35000, 15000, 20000);
console.log(output)