/**
 * function to validate the input date
 * @returns true/false based on the validity of the input date
 */
const moment = require("moment");
function isValidDate(inputDate) {
  return moment(inputDate, "DD-MM-YYYY", true).isValid();
}

module.exports = isValidDate;
