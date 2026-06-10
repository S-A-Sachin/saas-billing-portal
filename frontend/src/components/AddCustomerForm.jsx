import { useState } from "react";
import API from "../services/api";

function AddCustomerForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    plan: "Basic",
    amount: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/customers", form);

      alert("Customer Added");

      setForm({
        name: "",
        email: "",
        plan: "Basic",
        amount: "",
        status: "Active",
      });

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="table-box">
      <h2>Add Customer</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Customer Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="plan"
          placeholder="Plan"
          value={form.plan}
          onChange={handleChange}
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={form.amount}
          onChange={handleChange}
        />

        <button type="submit">
          Add Customer
        </button>
      </form>
    </div>
  );
}

export default AddCustomerForm;