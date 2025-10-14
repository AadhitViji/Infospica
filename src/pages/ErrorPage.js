import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";

const ErrorPage = () => {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");
  const [errorName, setErrorName] = useState("");
  const [finallyNote, setFinallyNote] = useState("");

  useEffect(() => {
    console.log("ErrorPage loaded");
  }, []);

  // Demo state for named errors
  const [demoErrName, setDemoErrName] = useState("");
  const [demoErrMsg, setDemoErrMsg] = useState("");

  const testInput = () => {
    setMessage("");
    setErrorName("");
    setFinallyNote("");
    let x = value;
    try {
      if (x.trim() === "") throw new Error("is empty");
      if (isNaN(x)) throw new TypeError("is not a number");
      x = Number(x);
      if (x > 10) throw new RangeError("is too high");
      if (x < 5) throw new RangeError("is too low");
      setMessage("Input is valid (between 5 and 10).");
    } catch (err) {
      const name = err?.name || "Error";
      const msg = err?.message ?? String(err);
      setErrorName(name);
      setMessage(`Input ${msg}`);
    } finally {
      // Do not modify/clear the input; show a separate finally note
      setFinallyNote("finally block executed");
    }
  };

  return (
    <div className="conditions-container">
      <h1>Errors and try...catch</h1>
      <p className="conditions-helper">
        Please input a number between 5 and 10:
      </p>

      <div className="conditions-section">
        <label className="conditions-label" htmlFor="err-input">
          Input
        </label>
        <input
          id="err-input"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="conditions-input"
          placeholder="Enter a number 5-10"
        />
        <button
          className="grid-button"
          style={{ marginTop: 8 }}
          onClick={testInput}
        >
          Test Input
        </button>
        {(message || errorName || finallyNote) && (
          <div style={{ marginTop: 10 }}>
            {errorName && (
              <div className="conditions-badge" style={{ marginRight: 8 }}>
                Name: {errorName}
              </div>
            )}
            {message && (
              <div
                className={errorName ? "conditions-error" : "conditions-helper"}
              >
                {message}
              </div>
            )}
            {finallyNote && (
              <div className="conditions-helper" style={{ marginTop: 6 }}>
                {finallyNote}
              </div>
            )}
          </div>
        )}
      </div>

      <BackButton />
    </div>
  );
};

export default ErrorPage;
