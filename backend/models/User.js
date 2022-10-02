const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    // min: 1,
    // max: 20,
  },
  password: {
    type: String,
    required: true,
  },
  passwordverify: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;
