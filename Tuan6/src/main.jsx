import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ProductRouter from "./ProductRouter.jsx";
import Bai4 from "./Bai4.jsx";
import Bai5 from "./Bai5.jsx";
import Bai6 from "./Bai6.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      {/* <ProductRouter /> */}
      <Bai6 />
    </BrowserRouter>
  </StrictMode>,
);
