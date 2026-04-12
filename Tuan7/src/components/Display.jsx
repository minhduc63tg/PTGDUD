import React from "react";
import { useRecoilValue } from "recoil";
import { countState } from "../atoms/counterAtom";

export default function Display() {
  const count = useRecoilValue(countState);
  return (
    <div>
      <h2>Count: {count}</h2>
    </div>
  );
}
