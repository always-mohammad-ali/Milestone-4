function countVowel(str){
     let count = 0;
     let str1 = str.toLowerCase();
     for(let i=0; i<str1.length; i++){
         if(str1[i]==='a' || str1[i]==='e' || str1[i]==='i' || str1[i]==='o' || str1[i]==='u'){
            count++;
         }
     }
     return count;
}

let string1 = 'I love Bangladesh';

let result1 = countVowel(string1);

console.log(result1)

let result2 = countVowel('eee')
console.log(result2)

let result3 = countVowel('aeiou')
console.log(result3)

let result4 = countVowel('she she is is A a fucking IdIot')
console.log(result4)