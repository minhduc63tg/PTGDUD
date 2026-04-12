import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Display from "./components/Display";
import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <h2>Counter global (recoil)</h2>
      <Display />
      <Counter />
    </div>
  );
}

export default App;
