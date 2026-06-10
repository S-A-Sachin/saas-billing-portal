import { useEffect, useState } from "react";
import API from "../services/api";
import EditCustomer from "./EditCustomer";
const role = localStorage.getItem("role");

function CustomerTable() {
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState("");

  const handleDelete = async (id) => {
    try {
      await API.delete(`/customers/${id}`);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

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

      <input
        type="text"
        placeholder="Search Customer"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          marginBottom: "15px",
          width: "100%",
        }}
      />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Plan</th>
            <th>Amount</th>
            <th>Status</th>
            {role === "Admin" && <th>Action</th>}
          </tr>
        </thead>

        <tbody>
          {customers
            .filter((customer) =>
              customer.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((customer) => (
              <tr key={customer._id}>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.plan}</td>
                <td>₹{customer.amount}</td>
                <td>{customer.status}</td>

                <td>
<button
    onClick={async () => {
      const newName = prompt(
        "Enter new customer name",
        customer.name
      );

      if (!newName) return;

      try {
        await API.put(`/customers/${customer._id}`, {
          ...customer,
          name: newName,
        });

        window.location.reload();
      } catch (err) {
        console.error(err);
      }
    }}
  >
    Edit
  </button>

  {role === "Admin" && (
  <td>
    <EditCustomer customer={customer} />

    <button
      onClick={() => handleDelete(customer._id)}
    >
      Delete
    </button>
  </td>
)}
</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerTable;