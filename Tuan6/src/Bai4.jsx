import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./bai4/Dashboard";
import Profile from "./bai4/Profile";
import Orders from "./bai4/Orders";
import Settings from "./bai4/Settings";
import Checkout from "./bai5/Checkout";

export default function Bai4() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="profile" element={<Profile />} />
        <Route path="orders" element={<Orders />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
