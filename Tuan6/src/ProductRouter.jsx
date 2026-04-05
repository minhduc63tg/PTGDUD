import { Routes, Route, Router } from "react-router-dom";
import ProductList from "./bai3/ProductList";
import ProductDetail from "./bai3/ProductDetail";

export default function ProductRouter() {
  return (
    <Routes>
      {/* Trang danh sách sản phẩm */}
      <Route path="/products" element={<ProductList />} />

      {/* Trang chi tiết sản phẩm với Dynamic Route :id */}
      <Route path="/products/:id" element={<ProductDetail />} />
    </Routes>
  );
}
