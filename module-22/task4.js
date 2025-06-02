function longestWord(str){

      

      let str1 = str.toLowerCase();

      str1 = str1.split(' ');
      
      let temp = str1[0].length;
      let outputt = str1[0];
      for(let i = 0; i<str1.length; i++){
         if(str1[i].length>temp){
           temp = str1[i].length;
           outputt = str1[i];
           
         }
      }
      
      return outputt;
}

let output = longestWord('I love Bangladesh. Are you kiddinggggg?')
console.log(output)

let output2 = longestWord('hey man, howwwwwwwww are you? why are you looking aesthetic?')
console.log(output2)