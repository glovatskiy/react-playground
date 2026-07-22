import { useState } from "react";
import ThemeContext from "./ThemeContext";
import { ThemeButton } from "./ThemeButton";

function App() {
  const [theme, setTheme] = useState("light");
  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  return (
    <div style={{
      background: theme === "light" ? "white" : "black",
      color: theme === "light" ? "black" : "white",
      minHeight: "100vh", 
      padding: "20px"
    }}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <h1>Theme: { theme ==="light"?"Light 💡":"Dark 🌙"}</h1>
        <ThemeButton/>
      </ThemeContext.Provider>
    </div>
  )
}

export default App;
