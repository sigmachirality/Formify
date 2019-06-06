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
  let { mode, body } = event;
  body = JSON.parse(body);
  let sender, html, sbj;
  switch (mode) {
    case "contact":
      let { email, subject } = body;
      sender = email;
      sbj = subject;
      html = constants.contactTemplate(body);
      break;
    case "subscribe":
      let { email } = body;
      sbj = "Subscription Alert";
      html = constants.contactTemplate(body);
      break;
    default:
      throw new Error("Unimplemented form type.");
  }
  const mailOptions = actions.buildMailOptions(sender, EMAIL, html, sbj);
  const res = await transport.sendMail(mailOptions);
  return {
    statusCode: 200,
    body: res
  };
}