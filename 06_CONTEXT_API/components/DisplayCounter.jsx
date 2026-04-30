import React from "react";
import { useContext } from "react";
import { CounterContext } from "../src/App";

function DisplayCounter() {
  const { setCount } = useContext(CounterContext);

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>Increase</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrease</button>
      <button onClick={() => setCount((count) => (count = 0))}>Reset</button>
    </div>
  );
}

export default DisplayCounter;
