import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { countState } from "../atoms/counterAtom";

export default function Counter() {
  const [count, setCount] = useRecoilState(countState);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
      <button onClick={() => setCount(count - 1)}>Giảm</button>
    </div>
  );
}
