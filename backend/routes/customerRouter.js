const express = require("express");
const CustomerModel = require("../models/Customer");
const customerRouter = express.Router();
const auth = require("../middlewares/auth");

customerRouter.post("/", auth, async (req, res) => {
  try {
    const { name } = req.body;

    const newCustomer = new CustomerModel({
      name,
    });

    const savedCustomer = await newCustomer.save();
    res.status(200).json(savedCustomer);
  } catch (err) {
    return new Error(err);
  }
});

customerRouter.get("/", auth, async (req, res) => {
  try {
    const customers = await CustomerModel.find();
    res.json(customers);
  } catch (err) {
    console.error(err);
    res.status(400).send();
  }
});

module.exports = customerRouter;
