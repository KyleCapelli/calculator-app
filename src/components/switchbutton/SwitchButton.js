import React, { useState } from "react";
import "./SwitchButton.css";

const SwitchButton = ({ setTheme, theme }) => {
  const [themeValue, setThemeValue] = useState(1);

  const setAndSendTheme = (event) => {
    setTheme(parseInt(event.target.value));
    setThemeValue(parseInt(event.target.value));
  };

  return (
    <div>
      <input
        className={`switch__theme-selector ${
          theme === 1 ? "one" : theme === 2 ? "two" : "three"
        }`}
        type="range"
        min="1"
        max="3"
        value={themeValue}
        onChange={setAndSendTheme}
      />
    </div>
  );
};

export default SwitchButton;
