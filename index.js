const accountSid = 'ACCT_SID'; 
const authToken = 'AUTH_TOKEN'; 
const client = require('twilio')(accountSid, authToken); 
 
client.messages 
      .create({ 
         body: 'Your appointment is coming up on July 21 at 3PM', 
         from: 'whatsapp:{SenderNumber}',       
         to: 'whatsapp:{RecieverNumber}' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();