import Counter from "./components/Counter";

function App() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="p-6 border border-blue-500 rounded-xl bg-gray-600">
          <Counter />
        </div>
      </div>
    </>
  );
}

export default App;
