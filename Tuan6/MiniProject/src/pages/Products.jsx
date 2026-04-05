import { Link } from "react-router-dom";

const MOCK_PRODUCTS = [
  { id: 1, name: "Iphone 15 Pro", price: 1000 },
  { id: 2, name: "Macbook M3", price: 2000 },
];

export default function Products() {
  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      {MOCK_PRODUCTS.map((p) => (
        <div key={p.id}>
          <h3>
            {p.name} - ${p.price}
          </h3>
          <Link to={`/products/${p.id}`}>Xem chi tiết</Link>
        </div>
      ))}
    </div>
  );
}
