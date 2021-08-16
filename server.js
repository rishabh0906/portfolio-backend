const express = require("express");
let dotenv=require('dotenv').config();
const nodemailer = require("nodemailer");

let app = express();


app.use(express.json());


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
const PORT = process.env.PORT || 4000;
console.log(PORT);

app.listen(PORT, () => {
  console.info(`server has started on ${PORT}`);
});
