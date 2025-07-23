import React from "react";
import { useTheme } from "../contexts/ThemeContext.jsx";

function ThemeToggler() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="toggler">
      {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}
export default ThemeToggler;
