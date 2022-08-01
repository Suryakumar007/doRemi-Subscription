/**
 * function to return the amount based on the subscription category and plan type
 * @param {*} subscriptionCategory - subscription category selected by the user
 * @param {*} planType - plan type selected by the user
 * @returns 
 */
function getRenewalAmount(subscriptionCategory, planType) {
  let MUSIC_TRIAL_AMOUNT = 0
  let MUSIC_PERSONAL_AMOUNT = 100
  let MUSIC_PREMIUM_AMOUNT = 250

  let VIDEO_TRIAL_AMOUNT = 0
  let VIDEO_PERSONAL_AMOUNT = 200
  let VIDEO_PREMIUM_AMOUNT = 500

  let PODCAST_TRIAL_AMOUNT = 0
  let PODCAST_PERSONAL_AMOUNT = 100
  let PODCAST_PREMIUM_AMOUNT = 300
  if (subscriptionCategory == "MUSIC") {
    switch (planType) {
      case "FREE":
        return MUSIC_TRIAL_AMOUNT;
        break;
      case "PERSONAL":
        return MUSIC_PERSONAL_AMOUNT;
        break;
      case "PREMIUM":
        return MUSIC_PREMIUM_AMOUNT;
        break;

      default:
        break;
    }
  }
  else if (subscriptionCategory == "VIDEO") {
    switch (planType) {
      case "FREE":
        return VIDEO_TRIAL_AMOUNT;
        break;
      case "PERSONAL":
        return VIDEO_PERSONAL_AMOUNT;
        break;
      case "PREMIUM":
        return VIDEO_PREMIUM_AMOUNT;
        break;

      default:
        break;
    }
  }
  else if (subscriptionCategory == "PODCAST") {
    switch (planType) {
      case "FREE":
        return PODCAST_TRIAL_AMOUNT;
        break;
      case "PERSONAL":
        return PODCAST_PERSONAL_AMOUNT;
        break;
      case "PREMIUM":
        return PODCAST_PREMIUM_AMOUNT;
        break;

      default:
        break;
    }
  }
}

module.exports = getRenewalAmount
