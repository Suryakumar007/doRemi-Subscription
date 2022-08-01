/**
 * function to return the date in which the customer to be notified 
 * @param {*} planType - the plan type based on which the renewal date is calculated
 * @param {*} subscriptionStartDate - the date at the subscription started
 * @returns the date at the notification needs to be triggered
 */

 function appendZeroesFront(num){
     let DOUBLE_DIGIT_IDENTIFIER = 10
    if(num<DOUBLE_DIGIT_IDENTIFIER){
        return '0' + num.toString()
    }
    else{
        return num.toString()
    }
}

function getRenewalDate(planType,subscriptionStartDate){
    let NOTIFYING_DAYS = 10
    let FREE_PLANTYPE_EXPIRING_NUMBER_OF_MONTHS = 1
    let PREMIUM_PLANTYPE_EXPIRING_NUMBER_OF_MONTHS = 3
    let MONTH_ADDER = 1
    let renewalDate,notifyDate
    if(planType == "FREE" || planType == "PERSONAL"){
         renewalDate= new Date(subscriptionStartDate.setMonth(subscriptionStartDate.getMonth()+FREE_PLANTYPE_EXPIRING_NUMBER_OF_MONTHS))
         notifyDate = new Date(renewalDate.setDate(renewalDate.getDate()-NOTIFYING_DAYS))
    }
    else if(planType == "PREMIUM"){
         renewalDate= new Date(subscriptionStartDate.setMonth(subscriptionStartDate.getMonth()+PREMIUM_PLANTYPE_EXPIRING_NUMBER_OF_MONTHS))
         notifyDate = new Date(renewalDate.setDate(renewalDate.getDate()-NOTIFYING_DAYS))
    }
    let notifyDateFormatted = appendZeroesFront(notifyDate.getDate()) + '-' + appendZeroesFront((notifyDate.getMonth()+MONTH_ADDER)) + '-' + notifyDate.getFullYear()
    return notifyDateFormatted
}

module.exports = getRenewalDate