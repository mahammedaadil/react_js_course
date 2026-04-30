import { createContext, useState } from "react";
import Counter from "../components/Counter";
import DisplayCounter from "../components/DisplayCounter";

export const CounterContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <CounterContext value={{ count, setCount }}>
        <Counter />
        <DisplayCounter />
      </CounterContext>
    </>
  );
}

export default App;
