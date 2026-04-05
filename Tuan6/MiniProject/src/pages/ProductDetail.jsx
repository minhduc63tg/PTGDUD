import { useParams, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useAppContext();

  const handleAddToCart = () => {
    addToCart({ id, name: `Sản phẩm ${id}`, price: 100 });
    alert("Đã thêm vào giỏ hàng!");
    navigate("/cart"); // Luồng: Detail -> Cart
  };

  return (
    <div>
      <h2>Chi tiết sản phẩm ID: {id}</h2>
      <button onClick={handleAddToCart}>Thêm vào giỏ & Thanh toán</button>
    </div>
  );
}
