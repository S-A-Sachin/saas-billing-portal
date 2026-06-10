import ActivityFeed from "../components/ActivityFeed";
import RevenueOverview from "../components/RevenueOverview";
import SubscriptionCard from "../components/SubscriptionCard";
import TopCustomers from "../components/TopCustomers";
import CustomerTable from "../components/CustomerTable";
import RevenueChart from "../components/RevenueChart";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";
import QuickStats from "../components/QuickStats";
import AddCustomerForm from "../components/AddCustomerForm";
export default function Dashboard() {
const role = localStorage.getItem("role");
const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main">
  <Navbar />

  <button
    onClick={logout}
    style={{
      float: "right",
      padding: "10px",
      marginBottom: "10px",
    }}
  >
    Logout
  </button>

        <div className="cards">
          <StatsCard title="Total Revenue" value="₹8,45,000" />
          <StatsCard title="Customers" value="1,284" />
          <StatsCard title="Subscriptions" value="892" />
          <StatsCard title="Growth" value="+24%" />
        </div>

        <div className="chart-box">
          <h2>Revenue Analytics</h2>
          <br />
          <RevenueChart />
        </div>

        <div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    marginTop: "20px",
  }}
>
  <ActivityFeed />
  <TopCustomers />
</div>

<div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    marginTop: "20px",
  }}
>
  <RevenueOverview />
  <SubscriptionCard />
</div>
<QuickStats />
{role === "Admin" && <AddCustomerForm />}
<CustomerTable />
      </div>
    </div>
  );
}
