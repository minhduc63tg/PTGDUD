import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <nav style={{ width: "200px", background: "#f0f0f0", padding: "20px" }}>
        <h2>Dashboard</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <Link to="/dashboard/profile">Profile</Link>
          </li>
          <li>
            <Link to="/dashboard/orders">Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/settings">Settings</Link>
          </li>
        </ul>
      </nav>

      <main style={{ flex: 1, padding: "20px" }}>
        <h1>Chào mừng bạn quay lại!</h1>
        <hr />

        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
