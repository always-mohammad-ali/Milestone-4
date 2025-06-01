let house ={
    isbigg : true,
    area: 2300,
    location: 'dhaka',
    
}

let keys = Object.keys(house)
for(let i = 0; i<keys.length; i++){
    console.log(keys[i])
    console.log(house[keys[i]])
    console.log(typeof(house[keys[i]]))

    console.log(`${keys[i]} : ${house[keys[i]]} (${house[keys[i]]})`)

}

