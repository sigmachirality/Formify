/*
  File of constants and templates seperated from index.js for code readibility.
*/

/*
  Email templates
*/
// Contact template for contact form mode.
const contactTemplate = (event) => {
  return `
  <p>You got a message from: <b>${event.email}</b></p>
  <p>${event.body}</p>
  `;
};
const subscribeTemplate = (event) => {
  return `
  <p>You got a subscription from: <b>${event.email}</b></p>
  `;
}

// Exports
module.exports = {
  contactTemplate,
  subscribeTemplate
}