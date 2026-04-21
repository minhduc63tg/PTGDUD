
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";

import WelcomePage from "./pages/WelcomePage";
import HomePage from "./pages/HomePage";
import RecipeBoxPage from "./pages/RecipeBoxPage";
import SearchPage from "./pages/SearchPage";
import SubscribePage from "./pages/SubscribePage";
import RecipeDetailPage from "./pages/RecipeDetailPage";

// Nếu chưa đăng nhập thì đẩy về trang chủ (/)
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Trang bên ngoài cho khách */}
        <Route path="/" element={<WelcomePage />} />

        {/* Trang bên trong, bắt buộc phải đăng nhập */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />

        {/* Thêm Route mới cho Recipe Box */}
        <Route
          path="/recipe-box"
          element={
            <ProtectedRoute>
              <RecipeBoxPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/search"
          element={
            <ProtectedRoute>
              <SearchPage />
            </ProtectedRoute>
          }
        />

        {/* Route mới cho trang Subscribe */}
        <Route
          path="/subscribe"
          element={
            <ProtectedRoute>
              <SubscribePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recipes/:id"
          element={
            <ProtectedRoute>
              <RecipeDetailPage />
            </ProtectedRoute>
          }
        />

        {/* Bắt các route không tồn tại */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
