import React from "react";
import { useRecoilState } from "recoil";
import { cartState } from "../atoms/cartAtom";

export default function CartItem({ item }) {
  const [cart, setCart] = useRecoilState(cartState);

  const increase = () => {
    setCart(
      cart.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
      ),
    );
  };

  const decrease = () => {
    setCart(
      cart
        .map((i) => (i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0),
    );
  };

  return (
    <div>
      <span>{item.name}</span>
      <button onClick={decrease}>-</button>
      <span>{item.quantity}</span>
      <button onClick={increase}>+</button>
    </div>
  );
}
