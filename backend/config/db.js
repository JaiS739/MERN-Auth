const mongoose = require("mongoose");

const connection = mongoose.connect(
  "mongodb+srv://user_sri:Sri00739@cluster0.bggnnvl.mongodb.net/noobauth?retryWrites=true&w=majority"
);

module.exports = connection;
