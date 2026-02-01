import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p className="price">{product.price}</p>
      <button>Buy Now</button>
    </div>
  );
};

export default ProductCard;
