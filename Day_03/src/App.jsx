import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(1); // Initialize render count to 1 because the component renders initially

  function clicked() {
    setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
    setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
  }

  // Increment renderCount on every render
  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <>
      <div className="card">
        <button onClick={clicked}>count is {count}</button>
      </div>
      <p className="read-the-docs">
        Component has rendered {renderCount.current} times.
      </p>
    </>
  );
}

export default App;
