import React from "react";
import { useSetRecoilState } from "recoil";
import { cartState } from "../atoms/cartAtom";
import useToast from "../hooks/useToast";

const products = [
  { id: 1, name: "Táo", price: 10000 },
  { id: 2, name: "Cam", price: 15000 },
];

export default function ProductList() {
  const { showToast } = useToast();
  const setCart = useSetRecoilState(cartState);
  const addToCart = (product) => {
    setCart((oldCart) => {
      const exist = oldCart.find((item) => item.id === product.id);

      if (exist) {
        return oldCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...oldCart, { ...product, quantity: 1 }];
    });
  };
  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      {products.map((p) => (
        <div key={p.id}>
          <span>
            {p.name} -- {p.price}đ
          </span>
          <button
            onClick={() => {
              addToCart(p);
              showToast("Đã thêm vào giỏ!");
            }}
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}
