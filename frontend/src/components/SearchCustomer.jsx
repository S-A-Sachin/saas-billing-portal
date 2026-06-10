import { useState } from "react";

function SearchCustomer({ onSearch }) {
  const [search, setSearch] = useState("");

  return (
    <div className="table-box">
      <h2>Search Customer</h2>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          onSearch(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchCustomer;