const mongoose = require("mongoose");

const CustomerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const CustomerModel = mongoose.model("customer", CustomerSchema);
module.exports = CustomerModel;
