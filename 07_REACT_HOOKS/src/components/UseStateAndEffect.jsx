import { useState, useEffect } from "react";

function UseStateAndEffect() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    console.log("I am Without Dependency Array", count);
  });

  useEffect(() => {
    console.log("I am With Empty Dependency Array", count);
  }, []);

  useEffect(() => {
    console.log("I am With  Dependency Array Variable", count);
  }, [count]);

  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Increament</button>
    </div>
  );
}

export default UseStateAndEffect;
