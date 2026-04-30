import { useRef, forwardRef } from "react";

const CustomInput = forwardRef(({ placeHolder, label }, ref) => {
  return (
    <div>
      <label>{label}: </label>
      <input type="text" ref={ref} placeholder={placeHolder} />
    </div>
  );
});

function UseRefHook() {
  const myRef = useRef(null);

  const focusValue = () => {
    myRef.current.focus();
  };

  const getValue = () => {
    if (!myRef.current.value) {
      return;
    }
    alert(myRef.current.value);
  };

  const clearValue = () => {
    myRef.current.value = "";
    myRef.current.focus();
  };

  return (
    <div>
      <CustomInput ref={myRef} label="name" placeHolder="Type Here" />
      <button onClick={getValue}>Get Ref Value</button>
      <button onClick={focusValue}>Focus Ref Value</button>
      <button onClick={clearValue}>clear Ref Value</button>
    </div>
  );
}

export default UseRefHook;
