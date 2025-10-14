import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";

// Helper to generate a random integer with different interval inclusivity
function getRandomIntByInterval(min, max, mode) {
  const a = Math.ceil(Number(min));
  const b = Math.floor(Number(max));

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return { error: "Please enter valid numbers for min and max." };
  }

  if (a > b) {
    return { error: "Min should be less than or equal to Max." };
  }

  switch (mode) {
    case "[a,b]": {
      // both included
      const count = b - a + 1;
      if (count <= 0) return { error: "No integers in the selected interval." };
      const val = Math.floor(Math.random() * count) + a;
      return { value: val };
    }
    case "(a,b)": {
      // both excluded
      const count = b - a - 1;
      if (count <= 0)
        return { error: "No integers strictly between min and max." };
      const val = Math.floor(Math.random() * count) + a + 1;
      return { value: val };
    }
    case "[a,b)": {
      // start included, end excluded
      const count = b - a;
      if (count <= 0)
        return { error: "No integers in the half-open interval [min, max)." };
      const val = Math.floor(Math.random() * count) + a;
      return { value: val };
    }
    case "(a,b]": {
      // start excluded, end included
      const count = b - a;
      if (count <= 0)
        return { error: "No integers in the half-open interval (min, max]." };
      const val = Math.floor(Math.random() * count) + a + 1;
      return { value: val };
    }
    default:
      return { error: "Unknown interval mode." };
  }
}

const MathPage = () => {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10);
  const [mode, setMode] = useState("[a,b]");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("MathPage loaded");
  }, []);

  const generate = () => {
    const { value, error: err } = getRandomIntByInterval(min, max, mode);
    if (err) {
      setError(err);
      setResult(null);
    } else {
      setError("");
      setResult(value);
    }
  };

  return (
    <div className="conditions-container">
      <h1>Random Number Generator</h1>
      <p className="conditions-helper">
        Generate an integer based on interval type: both included [a,b], both
        excluded (a,b), or one-sided included [a,b), (a,b].
      </p>

      <div className="conditions-section">
        <label
          className="conditions-helper"
          style={{ display: "grid", gap: 4 }}
        >
          <span>Min</span>
          <input
            type="number"
            value={min}
            onChange={(e) => setMin(e.target.value)}
            className="input"
          />
        </label>

        <label
          className="conditions-helper"
          style={{ display: "grid", gap: 4 }}
        >
          <span>Max</span>
          <input
            type="number"
            value={max}
            onChange={(e) => setMax(e.target.value)}
            className="input"
          />
        </label>

        <label
          className="conditions-helper"
          style={{ display: "grid", gap: 4 }}
        >
          <span>Interval type</span>
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value)}
            className="input"
          >
            <option value="[a,b]">[min, max] (both included)</option>
            <option value="(a,b)">(min, max) (both excluded)</option>
            <option value="[a,b)">[min, max) (start included)</option>
            <option value="(a,b]">(min, max] (end included)</option>
          </select>
        </label>

        <button className="grid-button" onClick={generate}>
          Generate
        </button>

        {error && (
          <div className="conditions-helper" style={{ color: "#b00020" }}>
            {error}
          </div>
        )}

        {result !== null && !error && (
          <div className="conditions-helper" style={{ fontSize: 18 }}>
            Result: <strong>{result}</strong>
          </div>
        )}
      </div>

      <BackButton />
    </div>
  );
};

export default MathPage;
