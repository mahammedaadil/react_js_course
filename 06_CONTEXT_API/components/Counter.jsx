import { CounterContext } from "../src/App";
import { useContext } from "react";

function Counter() {
  const { count } = useContext(CounterContext);
  return <div>Counter Value:{count}</div>;
}

export default Counter;
