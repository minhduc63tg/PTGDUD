// App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProtectedRoute from "./bai6/ProtectedRoute";
import Profile from "./bai4/Profile";
import Orders from "./bai4/Orders";
import { AuthProvider } from "./bai6/AuthContext";
import Login from "./bai4/Login";

function Bai6() {
  return (
    <AuthProvider>
      {" "}
      {/* Bọc toàn bộ app để mọi nơi đều lấy được thông tin user */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Nhóm các route cần bảo vệ */}
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/orders" element={<Orders />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default Bai6;
