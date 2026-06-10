export default function ActivityFeed() {
  const activities = [
    "Alex upgraded to Premium Plan",
    "Emma completed payment of ₹9999",
    "John renewed subscription",
    "David account expired",
    "New customer registered",
  ];

  return (
    <div className="table-box">
      <h2>Recent Activity</h2>

      <div style={{ marginTop: "20px" }}>
        {activities.map((activity, index) => (
          <div
            key={index}
            style={{
              padding: "12px",
              marginBottom: "10px",
              background: "#111827",
              borderRadius: "10px",
            }}
          >
            {activity}
          </div>
        ))}
      </div>
    </div>
  );
}