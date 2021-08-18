const express = require("express");
require('dotenv').config();
const nodemailer = require("nodemailer");
const path=require('path');
let app = express();


app.use(express.json());
 app.use(express.static(path.join(__dirname,'build')));



let transporter = nodemailer.createTransport({
 service:process.env.USER_SERVICE,
 port:587,

  auth: {
    user: process.env.USER_MAIL,
    pass: process.env.USER_PWD,
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages!");
  }
});

app.post("/access", (req, res, next) => {
  var mail = {
    from: process.env.SENDER,
    to: process.env.RECIEVER,
    subject: "portfolio-suggest",
    text: `viewer : ${req.body.name} \n email : ${req.body.email} \n text :${req.body.text} `,
  };

  transporter.sendMail(mail, (err, info) => {
    if (err) {
      console.log(err);
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
});

app.get('/*',(req,res)=>{

  res.sendFile(path.join(__dirname,'build','index.html'))
})
const PORT = process.env.PORT ||8987;

app.listen(PORT, () => {
  console.info(`server has started on ${PORT}`);
});
