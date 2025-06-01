const car = {
    model: 1992,
    brand:'bmw',
    name:'hondacivic',
    'passenger capacity': 5
}

console.log(car['passenger capacity']);

const carkey = Object.keys(car);
console.log(carkey);

const carvalue = Object.values(car);
console.log(carvalue);