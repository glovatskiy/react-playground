import { useState } from "react"

function App() {
  const [text, setText] = useState("")
  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <>
      <h1>Type something:</h1>
      <input type="text" placeholder="Type here..."value={ text} onChange={handleChange } />
      <p>You typed: { text}</p>
    </>
  )
}

export default App;
