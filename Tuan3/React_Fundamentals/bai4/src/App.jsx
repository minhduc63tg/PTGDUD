import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import StatusBadge from "./components/StatusBadge";

function App() {
  const [status, setStatus] = useState("Online");

  return (
    <div className="container">
      <h2>User status</h2>
      <StatusBadge status={status} />

      <div className="buttons">
        <button onClick={() => setStatus("Online")}>Online</button>
        <button onClick={() => setStatus("Offline")}>Offline</button>
        <button onClick={() => setStatus("Busy")}>Busy</button>
      </div>
    </div>
  );
}

export default App;
