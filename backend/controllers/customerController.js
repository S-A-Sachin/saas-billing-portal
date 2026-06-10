const Customer = require("../models/Customer");

const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const createCustomer = async (req, res) => {
  try {
    const customer = await Customer.create({
      name: "Sachin",
      email: "sachin@gmail.com",
      plan: "Premium",
      amount: 4999,
      status: "Active",
    });

    res.status(201).json(customer);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getCustomers,
  createCustomer,
};