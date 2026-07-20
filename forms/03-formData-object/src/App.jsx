import { useState } from "react";
function App() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    age: "",
    university: "",
    program: "",
  });
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  return (
    <>
      <div>
        <h2>Student profile</h2>
        <label htmlFor="fullname">Full name: </label>
        <input
          id="fullname"
          type="text"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          placeholder="Your Full name..."
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email..."
        />
      </div>
      <div>
        <label htmlFor="age">Your age: </label>
        <input
          id="age"
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Your age..."
        />
      </div>
      <div>
        <label htmlFor="university">University: </label>
        <input
          id="university"
          type="text"
          name="university"
          value={formData.university}
          onChange={handleChange}
          placeholder="Uviversity name..."
        />
      </div>
      <div>
        <label htmlFor="program">Study Program: </label>
        <select
          id="program"
          name="program"
          value={formData.program}
          onChange={handleChange}
        >
          <option value="" disabled>
            Choose a program: 
          </option>
          <option value="Software Development">Software Development</option>
          <option value="Business Management">Business management</option>
        </select>
      </div>
      <div>
        <p>Full name:{formData.fullname}</p>
        <p>Email: {formData.email}</p>
        <p>Age: {formData.age}</p>
        <p>University: {formData.university}</p>
        <p>Study Program: {formData.program}</p>
      </div>
    </>
  );
}

export default App
