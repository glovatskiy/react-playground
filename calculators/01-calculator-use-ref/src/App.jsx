import { useState, useRef } from "react";
function App() {
  const [result, setResult] = useState(0);
  const inputRef = useRef(null);

  function add() {
    const inputValue = Number(inputRef.current.value);
    const newResult = result + inputValue;
    setResult(newResult);
  }
  function subtract() {
    const inputValue = Number(inputRef.current.value);
    const newResult = result - inputValue;
    setResult(newResult);
  }
  function multiply() {
    const inputValue = Number(inputRef.current.value);
    const newResult = result * inputValue;
    setResult(newResult);
  }
  function divide() {
    const inputValue = Number(inputRef.current.value);
    if (inputValue === 0) {
      alert("Cannot divide by zero!");
      return;
    } 
      const newResult = result / inputValue;
      setResult(newResult);
  }
  function clearResult() {
    setResult(0);
  }
  function clearInput() {
    inputRef.current.value = "";
  }

  return (
    <>
      <h1>Calculator</h1>
      <p>Result: {result}</p>
      <input ref={inputRef} type="number"></input>
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
      <button onClick={multiply}>*</button>
      <button onClick={divide}>/</button>
      <button onClick={clearResult}>Clear result</button>
      <button onClick={clearInput}>Clear input</button>
    </>
  );
}

export default App;
