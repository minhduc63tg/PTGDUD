import React from "react";
import ThemeToggle from "./components/ThemeToggle";
import { useRecoilValue } from "recoil";
import { themeState } from "./atoms/themetom";

export default function App2() {
  const theme = useRecoilValue(themeState);
  return (
    <div className={theme}>
      <h1>Theme</h1>
      <ThemeToggle />
    </div>
  );
}
