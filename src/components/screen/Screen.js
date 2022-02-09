import React from "react";
import "./Screen.css";
import NumberFormat from "react-number-format";

const Screen = ({ display, theme }) => {
  const decimalDisplay = () => {
    if (!display.includes(".")) return;
    const decimal = display.split(".")[1];
    return "." + decimal;
  };

  return (
    <div
      className="screen__container-display"
      style={
        theme === 1
          ? { background: "hsl(224, 36%, 15%)" }
          : theme === 2
          ? { background: "hsl(0, 0%, 100%)" }
          : { background: "hsl(268, 71%, 12%)" }
      }
    >
      <p
        style={
          theme === 1
            ? { color: "#fff" }
            : theme === 2
            ? { color: "hsl(60, 10%, 19%)" }
            : { color: "hsl(52, 100%, 62%)" }
        }
      >
        <NumberFormat
          value={display.split(".")[0]}
          thousandSeparator={true}
          allowNegative={true}
          displayType={"text"}
          isNumericString={true}
          allowLeadingZeros={false}
        />
        {decimalDisplay()}
      </p>
    </div>
  );
};

export default Screen;

/*
          if (!savedValue) {
            setSavedValue(value);
            setValue("0");
            setOperator(event.key);
          } else {
            const newValue =
              parseInt(value.split(",").join("")) +
              parseInt(savedValue.split(",").join(""));
            setValue(newValue.toLocaleString("en-US"));
            setValue("0");
            setOperator(event.key);
          }
          */
