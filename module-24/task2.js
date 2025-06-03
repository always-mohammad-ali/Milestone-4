function sendNotification(mail){
    
    if(mail.includes('@')){
          let substr = mail.split('@');
    
            let userName = substr[0];
            let lastName = substr[1];
            console.log(userName + ' sent you an email from ' + lastName);
    }
    else{
        console.log('Invalid input');
    }

        
        
    }
    
    


let input1 = sendNotification('alim@gmail.com');

let input2 = sendNotification('farhan34@yahoo.com');

let input3 = sendNotification('nadim.naem5@outlook.com');

let input4 = sendNotification('fahim234.hotmail.com');

let input5 = sendNotification('sadia8icloud.com');

let input6 = sendNotification('ali.com')

let input7 = sendNotification('ali.com@meali')
