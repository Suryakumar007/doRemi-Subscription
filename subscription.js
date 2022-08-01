/**
 * File handles the below core operations
 * startSubscription - function which will start the subscription based on the input date
 * addSubscription - function which validates and add the valid Subscriptions
 * printRenewalDetails - function which will print the renewal details
 * addTopUp - function which will validate and add the topup amount
 */
const isValidDate = require("./checkValidDate");
const fetchRenewalAmount = require("./renewalAmount");
const fetchRenewalDate = require("./renewalDate");
const moment = require("moment");
let renewalReminderRepository = [];
let activeSubscriptions = [];
let renewalAmount = 0;
let isDateValid = true

class Subscription {
  constructor() {
    this.subscriptionStartDate = "";
    this.isTopupActive = false;
  }

  startSubscription(subscriptionStartDate) {
    if (!isValidDate(subscriptionStartDate)) {
        isDateValid = false
      console.log("INVALID_DATE");
      return false;
    } else {
      this.subscriptionStartDate = subscriptionStartDate;
      return true;
    }
  }

  addSubscription(subscriptionCategory, planType) {
    if (!activeSubscriptions.includes(subscriptionCategory) && isDateValid) {
      let formattedDate = moment(this.subscriptionStartDate,"DD-MM-YYYY").toDate();
      let renewalDate;
      renewalAmount += fetchRenewalAmount(subscriptionCategory, planType);
      renewalDate = fetchRenewalDate(planType,formattedDate);

      renewalReminderRepository.push(
        `RENEWAL_REMINDER ${subscriptionCategory} ${renewalDate}`
      );
      activeSubscriptions.push(subscriptionCategory);
    }
    else if(!isDateValid){
        console.log("ADD_SUBSCRIPTION_FAILED INVALID_DATE")
    }
    else{
        console.log("ADD_SUBSCRIPTION_FAILED DUPLICATE_CATEGORY")
    }
  }

  printRenewalDetails() {
    if (!renewalReminderRepository.length == 0) {
      for (let i in renewalReminderRepository) {
        console.log(renewalReminderRepository[i]);
      }
      console.log(`RENEWAL_AMOUNT ${renewalAmount}`);
    } else {
      console.log("SUBSCRIPTIONS_NOT_FOUND");
    }
  }

  addTopUp(typeOfTopup, numberOfMonths) {
    let priceForFourDeviceTopup = 50;
    let priceForTenDeviceTopup = 100;
    if(!this.isTopupActive && !renewalReminderRepository.length == 0 && isDateValid){
        if (typeOfTopup.includes("FOUR_DEVICE")) {
            renewalAmount = renewalAmount + priceForFourDeviceTopup * numberOfMonths;
          } else if (typeOfTopup.includes("TEN_DEVICE")) {
            renewalAmount = renewalAmount + priceForTenDeviceTopup * numberOfMonths;
          }
          this.isTopupActive = true
    }
    else if(!isDateValid){
        console.log("ADD_TOPUP_FAILED INVALID_DATE")
    }
    else if(this.isTopupActive){
        console.log("ADD_TOPUP_FAILED DUPLICATE_TOPUP")
    }
    else if(renewalReminderRepository.length == 0)
      console.log("ADD_TOPUP_FAILED SUBSCRIPTIONS_NOT_FOUND");
  }
}

module.exports = Subscription;
