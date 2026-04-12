import React from "react";
import { useSetRecoilState } from "recoil";
import { userState } from "../atoms/userAtom";

export default function Logout() {
  const setUser = useSetRecoilState(userState);
  return (
    <div>
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
}
