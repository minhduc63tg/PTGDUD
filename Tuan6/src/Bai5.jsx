import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./bai4/Dashboard";
import Profile from "./bai4/Profile";
import Orders from "./bai4/Orders";
import Settings from "./bai4/Settings";
import Checkout from "./bai5/Checkout";
import ProductList from "./bai3/ProductList";
import ProductDetail from "./bai3/ProductDetail";

export default function Bai5() {
  return (
    <Routes>
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductDetail />} />

      <Route path="/checkout" element={<Checkout />} />

      <Route path="/" element={<h1>Trang chủ</h1>} />
    </Routes>
  );
}
