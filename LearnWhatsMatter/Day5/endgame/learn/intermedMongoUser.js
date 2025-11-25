//user.js
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/testingendgame");

const userSchema = mongoose.Schema({
  username: String,
  nickname: String,
  desctiption: String,
  categories: {
    default: [],
    type: Array,
  },
  datecreated: {
    default: Date.now(),
    type: Date,
  },
});

module.exports = mongoose.model("user",userSchema)