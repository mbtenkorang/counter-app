import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // const [color, setColor] = useState("");

  function reduce_number(e) {
    setCount((count) => count - 10);
  }

  function reset_number(e) {
    setCount((count) => (count = 0));
  }

  function increase_number(e) {
    setCount((count) => count + 10);
  }

  return (
    <div className="App">
      <div className="logo">Counter App</div>
      <h1>{count}</h1>
      <div className="card">
        <button onClick={reduce_number}>-</button>
        <button onClick={reset_number}>reset</button>
        <button onClick={increase_number}>+</button>
      </div>
    </div>
  );
}

export default App;
