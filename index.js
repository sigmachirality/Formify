/*
  The entry point file for the Lambda.
*/
// Package Dependencies
const AWS = require("aws-sdk");
const mailer = require("nodemailer");
const actions = require("./actions.js");
const constants = require("./constants.js");
// Environment Variables
const EMAIL = process.env.EMAIL;
// Object Creation
const SES = new AWS.SES();
const transport = mailer.createTransport({ SES });

exports.handler = async (event) => {
  const { mode } = event;
  let sender, html, sbj;
  switch (mode) {
    case "contact":
      let { email, subject } = event;
      sender = email;
      sbj = subject;
      html = constants.contactTemplate(event);
      break;
    case "subscribe":
      let { email } = event;
      sbj = "Subscription Alert";
      html = constants.contactTemplate(event);
      break;
    default:
      throw new Error("Unimplemented form type.");
  }
  const mailOptions = actions.buildMailOptions(sender, EMAIL, html, sbj);
  return await transport.sendMail(mailOptions); 
}