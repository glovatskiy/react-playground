import { useContext } from "react";
import ThemeContext from "./ThemeContext";

export function ThemeButton() {
    const themeContext = useContext(ThemeContext);
    const { theme, toggleTheme } = themeContext;
    return (
      <div>
        <button onClick={toggleTheme}>
          Change to {theme === "light" ? "Dark 🌙" : "Light 💡"}
        </button>
      </div>
    );
}