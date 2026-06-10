const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const customerRoutes = require("./routes/customerRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("SaaS Billing Portal Backend Running");
});

app.use("/api/customers", customerRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});