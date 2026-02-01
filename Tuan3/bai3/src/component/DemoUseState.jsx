import React from "react";
import { useState } from "react";

function DemoUseState() {
  const [type, setType] = useState("success");
  const alertStyles = {
    success: {
      backgroundColor: "green",
    },
    error: {
      backgroundColor: "red",
    },
    warning: {
      backgroundColor: "yellow",
    },
  };

  return (
    <div>
      <div
        style={{
          padding: "12px",
          marginBottom: "10px",
          borderRadius: "5px",
          ...alertStyles[type],
        }}
      >
        {type.toUpperCase()} ALERT
      </div>

      <button onClick={() => setType("success")}>Success</button>
      <button onClick={() => setType("error")}>Error</button>
      <button onClick={() => setType("warning")}>Warning</button>
    </div>
  );
}

export default DemoUseState;
