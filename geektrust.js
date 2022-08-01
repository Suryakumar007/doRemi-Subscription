/**
 * startup file 
 * Reads the input from the text file and processes it
 */
const fs = require("fs");
const Subscription = require("./subscription");

const filename = process.argv[2];

fs.readFile(filename, "utf8", (err, data) => {
  let input = data.toString().split("\n");
  let inputStartDate = input[0].split(" ")[1];

  let mySubscription = new Subscription();
  let checkValidDate = mySubscription.startSubscription(inputStartDate);

  for (let i = 1; i < input.length; i++) {
    let temp = input[i];
    let commandArray = temp.split(" ");

    if (commandArray[0].includes("ADD_SUBSCRIPTION")) {
      mySubscription.addSubscription(commandArray[1], commandArray[2], checkValidDate);
    } 
    else if (commandArray[0].includes("PRINT_RENEWAL_DETAILS")) {
      mySubscription.printRenewalDetails();
    } 
    else if (commandArray[0].includes("ADD_TOPUP")) {
      mySubscription.addTopUp(commandArray[1], commandArray[2], checkValidDate);
    }
  }
});
