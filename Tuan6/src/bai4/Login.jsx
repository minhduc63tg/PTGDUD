import { useAuth } from "../bai6/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/profile");
  };

  return (
    <div>
      <h1>Trang Đăng Nhập</h1>
      <button onClick={handleLogin}>Bấm vào đây để Login</button>
    </div>
  );
}

export default Login;
