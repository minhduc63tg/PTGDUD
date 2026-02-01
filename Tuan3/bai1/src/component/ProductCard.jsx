import React, { useState } from "react";
import pizzaImg from "../assets/pizza.jpg";

const products = [
  {
    name: "Pizza",
    price: 20000,
    img: pizzaImg,
  },
  {
    name: "Burger",
    price: 15000,
    img: pizzaImg,
  },
];

const ProductCard = ({ product, onAdd, count }) => {
  return (
    <div className="product-card">
      <img src={product.img} alt={product.name} width="200" />
      <h1>{product.name}</h1>

      <p>Price: {product.price}</p>
      <button onClick={() => onAdd(product)}>Add to Cart ({count}) </button>
    </div>
  );
};

const ProductList = () => {
  const [cart, setCart] = useState({});

  const handleAddToCart = (product) => {
    setCart((pre) => ({
      ...pre,
      [product.name]: (pre[product.name] || 0) + 1,
    }));
  };
  return (
    <div>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
          onAdd={handleAddToCart}
          count={cart[product.name] || 0}
        />
      ))}
    </div>
  );
};

export default ProductList;
