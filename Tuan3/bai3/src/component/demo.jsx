import React, { useState } from "react";

const Demo = () => {
  const [type, setType] = useState("success");
  const handType = {
    success: {
      backgroundColor: "green",
    },
    error: {
      backgroundColor: "red",
    },
    waining: {
      backgroundColor: "yellow",
    },
  };
  return (
    <div>
      <div
        style={{
          padding: "5px",
          margin: "10px",
          ...handType[type],
        }}
      >
        {type.toUpperCase()} ALERT
      </div>

      <button onClick={() => setType("success")}>Success</button>
      <button onClick={() => setType("error")}>Danger</button>
      <button onClick={() => setType("waining")}>Waining</button>
    </div>
  );
};

export default Demo;
