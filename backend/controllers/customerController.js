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
      name: req.body.name,
      email: req.body.email,
      plan: req.body.plan,
      amount: req.body.amount,
      status: req.body.status || "Active",
    });

    res.status(201).json(customer);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const deleteCustomer = async (req, res) => {
  try {
    await Customer.findByIdAndDelete(req.params.id);

    res.json({
      message: "Customer Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(customer);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getCustomers,
  createCustomer,
  deleteCustomer,
  updateCustomer,
};