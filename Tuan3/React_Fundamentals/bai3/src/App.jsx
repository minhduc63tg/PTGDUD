import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="container">
      <h2>Form nhập</h2>
      <div className="form-group">
        <label>Họ và tên: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <hr />

      <h3>Đang nhập: </h3>
      <p>
        <strong>Tên: </strong>
        {name}
      </p>
      <p>
        <strong>Email: </strong>
        {email}
      </p>
    </div>
  );
}

export default App;
