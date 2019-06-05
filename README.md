# Formify
- The end goal is an easily deployable Lambda that takes in POSTed form data and scrobbles them to some other location.

## Setup
- Create an AWS Lambda Function with access to SES and API Gateway.
- Verify an email through SES.
- Link the AWS Lambda function to API Gateway using a proxy integration.
- Run npm/yarn install in a cloned copy of this repo, then zip the repo contents and deploy to your Lambda.

## Configuration
Environment variables

| Variable | Usage |
|----------|-------|
| EMAIL    |String specifying the SES verified email to send alerts to. Ex: "sigma@chirali.ty"|

## Planned Features
- Forwarding emails from contact forms
- Sending emails containing data from forms
- Scrobbling form data to Google Docs/Airtable
