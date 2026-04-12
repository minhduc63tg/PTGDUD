import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { userState } from "../atoms/userAtom";

export default function Login() {
  const setUser = useSetRecoilState(userState);
  const [userName, setUserName] = useState("");

  const handleLogin = () => {
    if (!userName) return;
    setUser({
      name: userName,
    });

    setUserName("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username..."
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
