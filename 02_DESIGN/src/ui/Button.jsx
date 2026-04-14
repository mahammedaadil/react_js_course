import React from "react";

function Button({ buttonText }) {
  return (
    <div>
      <button
        className="mt-4 px-4 text-white-400 bg-blue-500
           border border-blue-600 rounded-lg py-2 hover:bg-gray-200 "
      >
        {buttonText}
      </button>
    </div>
  );
}

export default Button;
