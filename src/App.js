import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Screen from "./components/screen/Screen";
import Buttons from "./components/buttons/Buttons";

import "./App.css";

function App() {
  const [display, setDisplay] = useState("");
  const [preState, setPreState] = useState("");
  const [curState, setCurState] = useState("");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  const [theme, setTheme] = useState(1);

  console.log(theme);

  const inputNum = (e) => {
    if (curState.includes(".") && e.target.innerText === ".") return;

    if (total) {
      setPreState("");
    }

    if (curState === "0" && e.target.innerText === "0") return;

    curState
      ? setCurState((pre) => pre + e.target.innerText)
      : setCurState(e.target.innerText);

    setTotal(false);
  };

  useEffect(() => {
    if (curState[0] === "0" && !curState.includes(".")) {
      curState === "0"
        ? setDisplay("0")
        : setDisplay(curState.slice(1, curState.length));
    } else if (!curState && !preState) {
      setDisplay("0");
    } else if (!curState) {
      if (preState[0] === ".") setDisplay("0" + preState);
      else setDisplay(preState);
    } else if (curState[0] === ".") {
      setDisplay("0" + curState);
    } else {
      setDisplay(curState);
    }
  }, [curState, preState]);

  useEffect(() => {
    setDisplay("0");
  }, []);

  const operatorType = (e) => {
    if (!curState) {
      setOperator(e.target.innerText);
    } else if (!preState || preState === "0") {
      setPreState(curState);
    } else {
      let cal;
      switch (operator) {
        case "/":
          cal = String(parseFloat(preState) / parseFloat(curState));
          break;
        case "+":
          cal = String(parseFloat(preState) + parseFloat(curState));
          break;
        case "-":
          cal = String(parseFloat(preState) - parseFloat(curState));
          break;
        case "x":
          cal = String(parseFloat(preState) * parseFloat(curState));
          break;
        default:
          return;
      }
      setPreState(cal);
    }
    setCurState("");
    setOperator(e.target.innerText);
  };

  const reset = () => {
    setPreState("0");
    setCurState("");
    setOperator(null);
  };

  const equals = () => {
    if (!curState || !preState) return;
    setTotal(true);
    let cal;
    switch (operator) {
      case "/":
        cal = String(parseFloat(preState) / parseFloat(curState));
        break;
      case "+":
        cal = String(parseFloat(preState) + parseFloat(curState));
        break;
      case "-":
        cal = String(parseFloat(preState) - parseFloat(curState));
        break;
      case "x":
        cal = String(parseFloat(preState) * parseFloat(curState));
        break;
      default:
        return;
    }
    setPreState(cal);
    setCurState("");
    setOperator(null);
  };

  const backspace = () => {
    if (setTotal) {
      setPreState("");
    }
    setCurState(curState.slice(0, -1));
  };

  return (
    <div
      className="calculator__container"
      style={
        theme === 1
          ? { background: "hsl(222, 26%, 31%)" }
          : theme === 2
          ? { background: "hsl(0, 0%, 90%)" }
          : { background: "hsl(268, 75%, 9%)" }
      }
    >
      <Header setTheme={setTheme} theme={theme} />
      <Screen display={display} theme={theme} />
      <Buttons
        inputNum={(e) => inputNum}
        operatorType={(e) => operatorType}
        reset={reset}
        equals={equals}
        backspace={backspace}
        theme={theme}
      />
    </div>
  );
}

export default App;
