import React from "react";
import "./Buttons.css";

const Buttons = ({
  inputNum,
  operatorType,
  equals,
  reset,
  backspace,
  theme,
}) => {
  const mainButtonsTheme = () => {
    const buttonTheme =
      theme === 1
        ? {
            background: "hsl(30, 25%, 89%)",
            boxShadow: "inset 0px -5px 0px hsl(28, 16%, 65%)",
            color: "hsl(221, 14%, 31%)",
          }
        : theme === 2
        ? {
            background: "hsl(45, 7%, 89%)",
            boxShadow: "inset 0px -5px 0px hsl(35, 11%, 61%)",
            color: "hsl(60, 10%, 19%)",
          }
        : {
            background: "hsl(268, 47%, 21%)",
            boxShadow: "inset 0px -5px 0px hsl(290, 70%, 36%)",
            color: "hsl(52, 100%, 62%)",
          };
    return buttonTheme;
  };

  const equalsTheme = () => {
    const buttonTheme =
      theme === 1
        ? {
            background: "hsl(6, 63%, 50%)",
            boxShadow: "inset 0px -5px 0px hsl(6, 70%, 34%)",
            color: "#fff",
          }
        : theme === 2
        ? {
            background: "hsl(25, 98%, 40%)",
            boxShadow: "inset 0px -5px 0px hsl(25, 99%, 27%)",
            color: "#fff",
          }
        : {
            background: "hsl(176, 100%, 44%)",
            boxShadow: "inset 0px -5px 0px hsl(177, 92%, 70%)",
            color: "hsl(198, 20%, 13%)",
          };
    return buttonTheme;
  };

  const delResetTheme = () => {
    const buttonTheme =
      theme === 1
        ? {
            background: "hsl(225, 21%, 49%)",
            boxShadow: "inset 0px -5px 0px hsl(224, 28%, 35%)",
            color: "#fff",
          }
        : theme === 2
        ? {
            background: "hsl(185, 42%, 37%)",
            boxShadow: "inset 0px -5px 0px hsl(185, 58%, 25%)",
            color: "hsl(0, 0, 100%)",
          }
        : {
            background: "hsl(281, 89%, 26%)",
            boxShadow: "inset 0px -5px 0px hsl(285, 91%, 52%)",
            color: "hsl(0, 0, 100%)",
          };
    return buttonTheme;
  };

  return (
    <div
      className="buttons__container"
      style={
        theme === 1
          ? { background: "hsl(223, 31%, 20%)" }
          : theme === 2
          ? { background: "hsl(0, 5%, 81%)" }
          : { background: "hsl(268, 71%, 12%)" }
      }
    >
      <div className="buttons__row">
        <div onClick={inputNum()} style={mainButtonsTheme()}>
          7
        </div>
        <div onClick={inputNum()} style={mainButtonsTheme()}>
          8
        </div>
        <div onClick={inputNum()} style={mainButtonsTheme()}>
          9
        </div>
        <div
          className="blue-delete"
          onClick={backspace}
          style={delResetTheme()}
        >
          DEL
        </div>
      </div>
      <div className="buttons__row">
        <div onClick={inputNum()} style={mainButtonsTheme()}>
          4
        </div>
        <div onClick={inputNum()} style={mainButtonsTheme()}>
          5
        </div>
        <div onClick={inputNum()} style={mainButtonsTheme()}>
          6
        </div>
        <div onClick={operatorType()} style={mainButtonsTheme()}>
          +
        </div>
      </div>
      <div className="buttons__row">
        <div onClick={inputNum()} style={mainButtonsTheme()}>
          1
        </div>
        <div onClick={inputNum()} style={mainButtonsTheme()}>
          2
        </div>
        <div onClick={inputNum()} style={mainButtonsTheme()}>
          3
        </div>
        <div onClick={operatorType()} style={mainButtonsTheme()}>
          -
        </div>
      </div>
      <div className="buttons__row">
        <div onClick={inputNum()} style={mainButtonsTheme()}>
          .
        </div>
        <div onClick={inputNum()} style={mainButtonsTheme()}>
          0
        </div>
        <div onClick={operatorType()} style={mainButtonsTheme()}>
          /
        </div>
        <div onClick={operatorType()} style={mainButtonsTheme()}>
          x
        </div>
      </div>
      <div className="buttons__row">
        <div className="blue-reset" onClick={reset} style={delResetTheme()}>
          RESET
        </div>
        <div className="red-equals" onClick={equals} style={equalsTheme()}>
          =
        </div>
      </div>
    </div>
  );
};

export default Buttons;
