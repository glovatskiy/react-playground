import { useState } from "react"


function App() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  function handleFullnameChange(event) {
    setFullname(event.target.value);
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }


  return (
    <>
      <h2>Student registration form</h2>
      <label htmlFor="fullname">Full name:</label>
      <input id="fullname" type="text" placeholder="Your Full name..." value={fullname} onChange={handleFullnameChange} />
      <label htmlFor="email">Email:</label>
      <input id="email" type="email" placeholder="Your Email..." value={email} onChange={handleEmailChange}/>
      <p>
        Full name: {fullname} Email: {email}
      </p>
    </>
  );
}

export default App;
