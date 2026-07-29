import { useState } from "react";

export const Calculator = () => {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");

    function handleInputChange(event) {
        setInput(event.target.value);
    }

    
    
    function add() {
        const result = count + Number(input);
        setCount(result);
    }
    function subtract() {
        const result = count - Number(input);
        setCount(result);
    }
    function multiply() {
        const result = count * Number(input);
        setCount(result);
    }
    function divide() {
        if (input !== "") {
            const inputNumber = Number(input);
            if (inputNumber === 0) {
                alert("Cannot divide by zero")
            } else {
                const result = count / inputNumber;
                setCount(result);
            }
        }
    }
    function clearResult() {
        setCount(0);
    }
    function clearInput() {
        setInput("");
    }



    return (
        <>
            <h2>Result: {count}</h2>
            <input type="number" onChange={handleInputChange} value={input} />
            <div>
                <button onClick={add}>Add</button>
                <button onClick={subtract}>Subtract</button>
                <button onClick={multiply}>Multiply</button>
                <button onClick={divide}>Divide</button>
            </div>
            <button onClick={clearResult}>Clear result</button>
            <button onClick={clearInput}>Clear input</button>
        </>
    );
}