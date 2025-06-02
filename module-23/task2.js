function smallestName(name){
    let temp = name[0].length;
    let outputt = name[0];
    
    for(let i = 0; i<name.length; i++){
        if(name[i].length>temp){
            temp=name[i].length;
            outputt=name[i];
        }
    }
    return outputt;
}

let theName = ['ali', 'sali', 'kali', 'mali', 'mahim', 'mohammadali', 'alexander'];

let output = smallestName(theName);

console.log(output)