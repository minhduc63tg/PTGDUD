import React from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../atoms/userAtom";

export default function UserInfo() {
  const user = useRecoilValue(userState);

  if (!user) return <p>Chưa login</p>;
  return <p>Chào mừng {user.name}</p>;
}
