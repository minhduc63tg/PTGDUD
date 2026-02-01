import React, { useState } from "react";

const LoginForm = () => {
  const [alert, setAlert] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Tài khoản test
    const TEST_USERNAME = "admin";
    const TEST_PASSWORD = "123456";

    if (username === TEST_USERNAME && password === TEST_PASSWORD) {
      setAlert({
        type: "success",
        message: "Đăng nhập thành công 🎉",
      });
    } else {
      setAlert({
        type: "error",
        message: "Sai username hoặc password ❌",
      });
    }
  };

  return (
    <div className="login-container">
      {alert && (
        <div className={`alert alert-${alert.type}`}>
          <span>{alert.message}</span>
          <button className="alert-close" onClick={() => setAlert(null)}>
            x
          </button>
        </div>
      )}

      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
