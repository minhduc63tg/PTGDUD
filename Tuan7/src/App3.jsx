import React from "react";
import { useRecoilValue } from "recoil";
import { userState } from "./atoms/userAtom";
import UserInfo from "./components/UserInfo";
import Logout from "./components/Logout";
import Login from "./components/Login";

export default function App3() {
  const user = useRecoilValue(userState);
  return (
    <div>
      <h1>Auth giả lập (Login/Logout)</h1>
      <UserInfo />
      {!user ? (
        <Login />
      ) : (
        <div>
          <Logout />
          <UserInfo />
        </div>
      )}
    </div>
  );
}
