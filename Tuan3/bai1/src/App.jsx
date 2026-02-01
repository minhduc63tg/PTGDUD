import { useState } from "react";

import ProductCard from "./component/ProductCard";
import ProductList from "./component/ProductCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ProductList />
    </>
  );
}

export default App;
