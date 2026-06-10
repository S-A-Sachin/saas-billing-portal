const express = require("express");

const router = express.Router();

const {
  getCustomers,
  createCustomer,
  deleteCustomer,
  updateCustomer,
} = require("../controllers/customerController");

router.get("/", getCustomers);

router.post("/", createCustomer);

router.delete("/:id", deleteCustomer);

router.put("/:id", updateCustomer);

module.exports = router;