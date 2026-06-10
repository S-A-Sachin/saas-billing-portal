const name = localStorage.getItem("name");
const role = localStorage.getItem("role");

export default function Navbar() {
  return (
    <div className="navbar">
      <div>
        <h2>Dashboard</h2>
        <p>
          {name} ({role})
        </p>
      </div>

      <input
        className="search"
        placeholder="Search customers..."
      />
    </div>
  );
}