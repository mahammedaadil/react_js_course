import React, { useState } from "react";

function Form({ addNewUser }) {
  const [name, setName] = useState("");
  const [surName, setSurname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewUser({ name, surName });
    setName("");
    setSurname("");
  };

  return (
    <div className="bg-gray-500 p-8 gap-2">
      <h1 className="flex justify-center p-4 border border-gray-500 font-bold text-[50px]">
        Sample Registration Form
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="flex justify-center p-4 border border-gray-400 mt-4 gap-2">
          <span className="text-[20px]">Name:</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-[20px] border border-gray-400"
            placeholder="Enter Your Name"
          />
        </div>

        <div className="flex justify-center p-4 border border-gray-400 mt-4 gap-2">
          <span className="text-[20px]">Surname:</span>
          <input
            type="text"
            value={surName}
            onChange={(e) => setSurname(e.target.value)}
            className="text-[20px] border border-gray-400"
            placeholder="Enter Your Surname"
          />
        </div>

        <div className="flex justify-center p-4 border border-gray-400 mt-4 gap-2">
          <button
            type="submit"
            className="text-[20px] border border-gray-400 rounded bg-blue-600 text-white px-4 py-1"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
