/*
  Actions file containing functions seperated from index.js for code
  readibility.
*/

// Mail helpers
const buildMailOptions = (from, to, html, subject) => {
  return {
    from,
    subject,
    html,
    to
  }
}

// Google Drive helpers

module.exports = {
  buildMailOptions
}