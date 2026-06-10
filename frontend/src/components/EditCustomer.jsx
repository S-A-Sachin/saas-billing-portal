import { useState } from "react";
import API from "../services/api";

function EditCustomer({ customer }) {
  const [name, setName] = useState(customer.name);

  const handleUpdate = async () => {
    try {
      await API.put(`/customers/${customer._id}`, {
        ...customer,
        name,
      });

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button onClick={handleUpdate}>
      Edit
    </button>
  );
}

export default EditCustomer;