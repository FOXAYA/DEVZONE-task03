import React, { useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

function ThemeIcon() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-bs-theme", newTheme);
    setTheme(newTheme);
  };

  const iconStyles = {
    width: "40px",
    height: "40px",
    color: theme === "light" ? "gold" : "gray",
    cursor: "pointer",
    transition: "transform 0.3s ease, color 0.3s ease",
    transform: theme === "light" ? "rotate(0deg)" : "rotate(180deg)",
  };

  return (
    <div onClick={toggleTheme}>
      {theme === "light" ? (
        <MdLightMode style={iconStyles} />
      ) : (
        <MdDarkMode style={iconStyles} />
      )}
    </div>
  );
}

export default ThemeIcon;
