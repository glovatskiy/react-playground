import { useRef } from "react"
import "./App.css"
function App() {
  const inputRef = useRef(null)
  const paragraphRef = useRef(null)
  function handleClickInput() {
    inputRef.current.focus();
  }
  function handleClickParagraph() {
    paragraphRef.current.focus();
  }

  return (
    <>
      <h1>useRef showcase: </h1>
      <div>
        <input ref={inputRef} type="text" />
        <button onClick={handleClickInput}>Focus input</button>
      </div>
      <div>
        <p className="paragraph" ref={paragraphRef} tabIndex={-1}>Paragraph example</p>
        <button onClick={handleClickParagraph}>Focus paragraph</button>
      </div>
    </>
  );
}

export default App
