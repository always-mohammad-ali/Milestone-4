let count = 0;
function binary0(binary){
        for(let i=0; i<binary.length; i++){
            if(binary[i]==='0'){
                count++;
            }
        }
        return count;
}

const theBinary = '011010100100000';
binary0(theBinary);

console.log(count);