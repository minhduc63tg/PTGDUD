import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { themeState } from "../atoms/themetom";

export default function ThemeToggle() {
  const [theme, setTheme] = useRecoilState(themeState);
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <button onClick={changeTheme}>
        Change {theme === "light" ? "dark" : "light"} mode
      </button>
    </div>
  );
}
