import { useState } from "react";

function ToDoForm({ addTask }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(input);
    setInput("");
  };

  return (
    <div className="flex flex-col gap-4 max-w-sm p-6 bg-white rounded-xl shadow-sm border border-gray-100">
      <form onSubmit={handleSubmit}>
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-lg 
          focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
          type="text"
          placeholder="Enter todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <div className="flex mt-4">
          <button
            className="w-full px-6 py-2 bg-blue-600 text-white font-semibold 
        rounded-lg hover:bg-blue-700 active:scale-[0.98] transition-all shadow-md"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default ToDoForm;
