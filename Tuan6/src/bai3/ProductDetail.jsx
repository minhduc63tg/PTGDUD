import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBuy = () => {
    console.log(`Đang xử lý mua sản phẩm ID: ${id}`);

    navigate("/checkout");
  };
  return (
    <div style={{ padding: "20px" }}>
      <h1>Chi tiết sản phẩm</h1>
      <p>
        Đang xem sản phẩm có ID: <strong>{id}</strong>
      </p>

      <button
        onClick={handleBuy}
        style={{
          padding: "10px 20px",
          backgroundColor: "#ff4d4f",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        Mua hàng ngay
      </button>
    </div>
  );
}
