import React from "react";
import { useRecoilValue } from "recoil";
import { cartState, cartTotalState } from "../atoms/cartAtom";
import CartItem from "./CartItem";

export default function Cart() {
  const cart = useRecoilValue(cartState);
  const total = useRecoilValue(cartTotalState);

  return (
    <div>
      <h2>Giỏ hàng</h2>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <h3>Tổng: {total}đ</h3>
    </div>
  );
}
