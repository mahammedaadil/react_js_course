import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    if (count >= 20) {
      return;
    }
    setCount(count + 1);
  };

  const removeValue = () => {
    if (count <= 0) {
      return;
    }
    setCount(count - 1);
  };

  const resetValue = () => {
    setCount(0);
  };
  return (
    <>
      <div>
        <h1>Counter Inc-Dec-Reset</h1>
        <h2>Current Value:{count}</h2>
        <button onClick={addValue}>Add Value</button>
        <button onClick={removeValue}>Remove Value</button>
        <button onClick={resetValue}>Reset Value</button>
      </div>
    </>
  );
}

export default App;
