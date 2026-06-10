import { useEffect, useState } from "react";
import API from "../services/api";

function CustomerTable() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const res = await API.get("/customers");
        setCustomers(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div className="table-box">
      <h2>Customer Management</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Plan</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <tr key={customer._id}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.plan}</td>
              <td>₹{customer.amount}</td>
              <td>{customer.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerTable;