import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const decrease = () => {
    if (count > 0) setCount(count - 1);
  };

  const reset = () => setCount(0);

  return (
    <div className="container">
      <h1>Counter App</h1>
      <p className={count > 10 ? "count red" : "count"}>{count}</p>
      <div className="buttons">
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
