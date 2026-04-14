import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [countToSet, setCountToSet] = useState(0);

  const incCounter = () => {
    setCount(count + 1);
  };

  const decCounter = () => {
    if (count <= 0) {
      return;
    }
    setCount(count - 1);
  };

  const resetCounter = () => {
    setCount(0);
  };

  return (
    <>
      <div className=" items-center justify-center font-bold">
        <h1 className="font-bold">Counter With Chai</h1>
        <h2 className="">Current Value:{count}</h2>
      </div>
      <div className="mt-4 flex gap-2">
        <button
          className="bg-blue-200 border border-blue-200 
        rounded-xl hover:bg-yellow-100 font-bold  "
          onClick={incCounter}
        >
          Increase
        </button>
        <button
          className="bg-blue-200 border border-blue-200 
        rounded-xl hover:bg-yellow-100 font-bold "
          onClick={decCounter}
        >
          Decrease
        </button>
        <button
          className="bg-blue-200 border border-blue-200 
        rounded-xl hover:bg-yellow-100 font-bold "
          onClick={resetCounter}
        >
          Reset
        </button>
        <div />
      </div>
      <div className="flex mt-6 gap-2">
        <input
          className=" flex-col bg-gray-200 "
          value={countToSet}
          onChange={(e) => {
            setCountToSet(Number(e.target.value));
          }}
        />
        <button
          className="bg-blue-200 border border-blue-200 
        rounded-xl hover:bg-yellow-100 font-bold "
          onClick={() => {
            setCount(Number(countToSet));
          }}
        >
          Set Count : {countToSet}
        </button>
      </div>
    </>
  );
}

export default Counter;
