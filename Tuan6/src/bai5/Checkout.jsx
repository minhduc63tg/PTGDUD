import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ color: "green" }}> Thanh toán thành công!</h1>
      <p>Cảm ơn bạn đã mua hàng.</p>
      <button onClick={() => navigate("/products")}>Tiếp tục mua sắm</button>
    </div>
  );
}

export default Checkout;
