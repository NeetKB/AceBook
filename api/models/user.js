const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true 
  },
  username: {
    type: String,
    required: true 
  },
  imgURL: {
    type: String,
    required: false
  } // added imgURL to User model
},
{timstamps: true}
);

const User = mongoose.model("User", UserSchema);

module.exports = User;


