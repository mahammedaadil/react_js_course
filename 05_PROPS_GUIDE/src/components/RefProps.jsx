import { useRef, forwardRef } from "react";

const CustomInput = forwardRef(({ label, placeholder, className }, ref) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2">{label}</label>
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />
    </div>
  );
});
CustomInput.displayName = "CustomInput";

function RefProps() {
  const inputRef = useRef(null);
  const secondInputRef = useRef(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const getInputValue = () => {
    alert(`input value is ${inputRef.current.value}`);
  };

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  const focusSecondInput = () => {
    secondInputRef.current?.focus();
  };

  return (
    <section className="p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">RefProps</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
        reprehenderit nisi qui similique fugit cumque!
      </p>

      <div>
        <div>
          <h3>Try It Out</h3>
          <CustomInput
            ref={inputRef}
            label=" First Focus Element"
            placeholder="Type Here"
          />
          <CustomInput
            ref={secondInputRef}
            label=" Second Focus Element"
            placeholder="Type Here"
          />
          <div className="flex flex-wrap gap-3 mt-4">
            <button
              onClick={focusInput}
              className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
            >
              Focus First Element
            </button>

            <button
              onClick={getInputValue}
              className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
            >
              Get First Element
            </button>

            <button
              onClick={clearInput}
              className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
            >
              Clear First Element
            </button>
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            <button
              onClick={focusSecondInput}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-purple-600 transition"
            >
              Focus Second Element
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RefProps;
