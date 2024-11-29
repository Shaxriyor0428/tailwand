import { useState } from "react";
import Products from "./components/Products";
import Swipper from "./components/Swipper";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Swipper />
      <Products />
    </div>
  );
}

export default App;
