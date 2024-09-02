
const mongoose = require("mongoose");
const subscriptionSchema = new mongoose.Schema(
    {
  
      userid: {
        type: String,
        required: true,
      },
      firstname: {
        type: String,
        required: true,
      },
      lastname: {
        type: String,
        // required: true,
      }
    }
  );
  
  const Subscriptions = mongoose.model('Subscriptions', subscriptionSchema);
  module.exports = Subscriptions;
  
  