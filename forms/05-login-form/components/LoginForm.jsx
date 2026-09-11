import { useState } from "react";

const LoginForm = () => {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData((formData) => {
            return {
                ...formData,
                [name]: value
        } })
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        const loginData = { ...formData }
        console.log("Sending login data:", loginData);
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(loginData)
            })
            if (!response.ok) {
                throw new Error ("Cannot log in")
            }
            const data = await response.json()
            console.log("Server response:", data)
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Email:</label>
        <input
          id="username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    );
};

export default LoginForm;
