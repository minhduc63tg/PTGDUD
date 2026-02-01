import React from "react";
import ProductCard from "./component/ProductCard";
import "./App.css";

const products = [
  { id: 1, name: "Laptop", price: "$1000" },
  { id: 2, name: "Headphone", price: "$150" },
  { id: 3, name: "Keyboard", price: "$80" },
  { id: 4, name: "Mouse", price: "$40" },
  { id: 5, name: "Monitor", price: "$300" },
  { id: 6, name: "Camera", price: "$600" },
];

const App = () => {
  return (
    <div className="container">
      <h2>Product List</h2>

      <div className="product-list">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default App;
