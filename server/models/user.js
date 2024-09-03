
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Subscriptions = require('./subscriptions')

const userSchema = new Schema({
    firstname: {
      type: String,
      trim: true,
      required: true,
    },
    lastname: {
      type: String,
      trim: true,
      // required: true,
    },

    userid:{
        type: String,
        trim: true,
        required: true,
        unique: true,

    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
      minLength: 6,
    },
    birthDate:{
      type: Number,
      required: true

    },
    birthMonth:{
      type: Number,
      required: true
    },
    birthYear:{
      type:Number,
      required: true
    },
    gender:{
      type: Number

      // 0 for female --*-- 1 for male --*-- 2 for none

    },
    subscriptions : [Subscriptions.schema],
    accesskey: {
      type: String,
      trim: true,
      default: 'axrtre5razf8ytt5tud9chcg',
    },
});

const User = mongoose.model('usersdata', userSchema);

module.exports = User;
  
 