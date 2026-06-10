export default function TopCustomers() {
  const customers = [
    "Alex Johnson",
    "Emma Watson",
    "David Miller",
    "John Smith",
  ];

  return (
    <div className="table-box">
      <h2>Top Customers</h2>

      <ul style={{ marginTop: "20px" }}>
        {customers.map((customer, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {customer}
          </li>
        ))}
      </ul>
    </div>
  );
}