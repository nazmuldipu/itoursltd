import { Injectable } from '@angular/core';

// var email = require('emailjs/email');

// var server = email.server.connect({
//   user: 'itoursmail',
//   password: 'iTours#69',
//   host: 'smtp.itoursmail@gmail.com',
//   ssl: true
// });

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor() {}

  sendEmail(message: string) {
    // server.send(
    //   {
    //     text: message,
    //     from: 'you <itoursmail@gmail.com>',
    //     to: 'someone <nazmuldipu@gmail.com>, another <nazmul_dipu@yahoo.com>',
    //     subject: 'testing emailjs'
    //   },
    //   function(err, message) {
    //     console.log(err || message);
    //   }
    // );
  }

  sendmail(req, res) {
    // var server = email.server.connect({
    //   user: 'itoursmail@gmail.com',
    //   password: 'iTours#69',
    //   host: 'smtp.itoursmail@gmail.com',
    //   ssl: true
    // });
    // // send the message and get a callback with an error or details of the message that was sent
    // server.send(
    //   {
    //     text: 'You have signed up',
    //     from: 'itoursmail@gmail.com',
    //     to: req.body.name,
    //     subject: 'Welcome to my app'
    //     // attachment: [
    //     //   { data: '<html>i <i>hope</i> this works!</html>', alternative: true },
    //     //   {
    //     //     path: 'pathtofile.zip',
    //     //     type: 'application/zip',
    //     //     name: 'renamed.zip'
    //     //   }
    //     // ]
    //   },
    //   function(err, message) {
    //     if (err) console.log(err);
    //     else res.json({ success: true, msg: 'sent' });
    //   }
    // );
  }
}
