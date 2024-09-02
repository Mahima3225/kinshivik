
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Subscriptions = require('./subscriptions')

const userSchema = new Schema({
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      // required: true,
    },

    userid:{
        type: String,
        required: true,
        unique: true,

    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
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
});

const User = mongoose.model('usersdata', userSchema);

module.exports = User;
  
 