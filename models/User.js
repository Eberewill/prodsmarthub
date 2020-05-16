const mongoose = require("mongoose");

//let create User Schema
const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    isrequired: true,
  },

  Lastname: {
    type: String,
    isrequired: true,
  },
  address: {
    type: String,
  },

  email: {
    type: String,
    isrequired: true,
    unique: true,
  },
  password: {
    type: String,
    isrequired: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
//cexport the user schema to model
module.exports = mongoose.model("user", UserSchema);
