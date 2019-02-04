const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
var twilio = require('twilio');
require('dotenv').config()
const accountSid = process.env.accountSid;
const authToken =  process.env.authToken;
var client = new twilio(accountSid, authToken);
const app = express();



app.get('/*', (req, res) => {
  const twiml = new MessagingResponse();
  //let numbers = []
  var message = req.param("message");
  //var phoneNumber = req.param("phoneNumber");
  //numbers.push("+26"+phoneNumber);
  
  client.messages
  .create({
     body: (message)? message: 'no message',
     from: process.env.senderNo,
     to:  process.env.receiverNo,
   })
   .then(message => console.log("Success"))
  .done();
//  }
   //numbers.pop()
  //  console.log(message)
  // res.writeHead(200, {'Content-Type': 'text/xml'});
  // res.end(twiml.toString());
  
});

http.createServer(app).listen((process.env.PORT || 5000), () => {
  console.log('Express server listening on port 5000');
});