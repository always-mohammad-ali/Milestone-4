function findAveragePhonePrice(pric){
        let total = 0;
        let average = 0;
        for(let i=0; i<pric.length; i++){
           total = pric[i].price + total;
           average = total/pric.length;
        }
        return average;
}

const phones = [
        { model: "PhoneA", brand: "Iphone", price: 10 },
        { model: "PhoneB", brand: "Samsung", price: 10 },
        { model: "PhoneC", brand: "Oppo", price: 10 },
        { model: "PhoneD", brand: "Nokia", price: 10 },
        { model: "PhoneE", brand: "Iphone", price: 10 },
        { model: "PhoneF", brand: "HTC", price: 70 },
    ];

let output = findAveragePhonePrice(phones);
console.log(output);