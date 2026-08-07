import { useState } from "react"
export const Header = () => {
    const [name, setName] = useState("")
    const [input, setInput] = useState("")
    function handleChange(event) {
       setInput(event.target.value)
    }

    function handleClick() {
        setName(input)
        setInput("")
    }

    return (
        <>
            <h2>Hello, {name || "guest"}!</h2>
            <input type="text" value={input} onChange={handleChange }></input>
            <button onClick={handleClick}>Update greeting</button>
        </>
    )
}