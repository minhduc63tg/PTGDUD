import React from "react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Iphone" },
  { id: 2, name: "Samsung" },
  { id: 3, name: "Laptop" },
];

export default function ProductList() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Danh sách sản phẩm</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: "10px" }}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
