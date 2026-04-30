import { useEffect, useState, createContext } from "react";
import UseStateAndEffect from "./components/UseStateAndEffect";
import UseContextHook from "./components/UseContextHook";
import UseRefHook from "./components/UseRefHook";

export const FirstContext = createContext();

function App() {
  const MyObj = [
    { id: 1, name: "aadil", city: "bharuch" },
    { id: 2, name: "sahil", city: "surat" },
  ];
  return (
    <>
      <FirstContext.Provider value={MyObj}>
        <UseStateAndEffect />
        <UseContextHook />
        <UseRefHook />
      </FirstContext.Provider>
    </>
  );
}

export default App;
