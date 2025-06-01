let sentence = 'What a hardworking person am I';

let reversed ='';

for(let i = 0; i<sentence.length; i++){
    reversed= sentence.split(' ').reverse().join(' ')
}
console.log(reversed)