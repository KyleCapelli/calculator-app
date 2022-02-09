import React, { useState } from "react";

import "./Header.css";
import SwitchButton from "../switchbutton/SwitchButton";

const Header = ({ setTheme, theme }) => {
  return (
    <div
      className="header__container"
      style={
        theme === 1
          ? { color: "#fff" }
          : theme === 2
          ? { color: "hsl(60, 10%, 19%)" }
          : { color: "hsl(52, 100%, 62%)" }
      }
    >
      <h1>calc</h1>
      <div className="header__theme">
        <p className="header__theme-text">THEME</p>
        <div className="header__theme-switch-button">
          <div className="header__theme-options">
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
          <SwitchButton setTheme={setTheme} theme={theme} />
        </div>
      </div>
    </div>
  );
};

export default Header;
