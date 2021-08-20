const express = require("express");
const { google } = require("googleapis");
require("dotenv").config();
const nodemailer = require("nodemailer");
const path = require("path");
let app = express();


app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

let Oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URL
  );
  Oauth2Client.setCredentials({ refresh_token: process.envREFRESH_TOKEN });

  
async function sendmail(obj) {
  const ACCESS_TOKEN= Oauth2Client.getAccessToken();
  console.log(ACCESS_TOKEN);
  const transport = nodemailer.createTransport({
    service: process.env.USER_SERVICE,
    auth: {
      type: "OAuth2",
      user: "rishabhj945@gmail.com",
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: ACCESS_TOKEN,
    },
    tls:{
      rejectUnauthorized:false
    }
  });
  const mail = {
    from: process.env.SENDER,
    to: process.env.RECIEVER,
    subject: "portfolio-suggest",
    text: `viewer : ${obj.name} \n email : ${obj.email} \n text :${obj.text}`,
  };
  return transport.sendMail(mail);
}

app.post("/access", (req, res, next) => {
  sendmail(req.body)
    .then((info) => {
      res.json({status:"success"});
    })
    .catch((err) => {
      res.json({status:"fail"});
    });
});
app.get("/*",(req,res)=>{
  res.sendFile(path.join(__dirname,'build','index.html'));
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.info(`server has started on ${PORT}`);
});
