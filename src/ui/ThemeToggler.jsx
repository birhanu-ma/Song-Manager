import { useTheme } from "../contexts/ThemeContext";

function ThemeToggler() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="toggler btn">
      {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}
export default ThemeToggler;
