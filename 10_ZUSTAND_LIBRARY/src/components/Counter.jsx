import { useCounterStore } from "../store/useCounterStore.js";

function Counter() {
  const { count, increase, decrease, reset } = useCounterStore();

  return (
    <div>
      <h1>Current Counter: {count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>0</button>
    </div>
  );
}

export default Counter;
