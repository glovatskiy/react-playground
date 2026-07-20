import { useState } from "react";
import "./App.css";
function App() {
  const [score, setScore] = useState("");
  const [comment, setComment] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (Number(score) < 5 && comment.trim().length < 10) {
      alert(
        "For ratings below 5 stars, please provide more details about your experience.",
      );
      return;
    }
    console.log("Form submitted")
    setScore("");
    setComment("");
  }


  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback form:</h2>
          <div className="field">
            <label htmlFor="score">Score: {score} ⭐️</label>
            <input
              id="score"
              type="range"
              min="1"
              max="10"
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="comment">Comment: </label>
            <textarea id="comment" value={ comment} rows="5" onChange={e => setComment(e.target.value)} />
          </div>
          <button type="submit" disabled={!score}>Submit</button>
        </fieldset>
      </form>
    </>
  );
}

export default App;
