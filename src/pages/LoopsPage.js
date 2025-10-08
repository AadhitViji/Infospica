import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";

const LoopsPage = () => {
  const [forCount, setForCount] = useState("");
  const [whileStart, setWhileStart] = useState("");
  const [doStart, setDoStart] = useState("");
  const [bcMax, setBcMax] = useState("");

  useEffect(() => {
    console.log("LoopsPage loaded");
  }, []);

  //console
  const handleForCount = (e) => {
    setForCount(e.target.value);
    console.log(`For loop count changed: ${e.target.value}`);
  };
  const handleWhileStart = (e) => {
    setWhileStart(e.target.value);
    console.log(`While start changed: ${e.target.value}`);
  };
  const handleDoStart = (e) => {
    setDoStart(e.target.value);
    console.log(`Do...while start changed: ${e.target.value}`);
  };
  const handleBcMax = (e) => {
    setBcMax(e.target.value);
    console.log(`Break/Continue max changed: ${e.target.value}`);
  };

  const forLoopOutput = () => {
    const n = Number(forCount);
    if (forCount === "") return "Enter a count (0-50)";
    if (Number.isNaN(n)) return "Not a valid number";
    if (n < 0 || n > 50) return "Count must be 0-50";
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(i);
    }
    console.log("For loop result:", arr);
    return arr.join(", ");
  };

  const whileLoopOutput = () => {
    const start = Number(whileStart);
    if (whileStart === "") return "Enter a start (0-10)";
    if (Number.isNaN(start)) return "Not a valid number";
    if (start < 0 || start > 10) return "Start must be 0-10";
    const out = [];
    let i = start;
    while (i >= 0) {
      out.push(i);
      i--;
    }
    console.log("While loop result:", out);
    return out.join(" → ");
  };

  const doWhileOutput = () => {
    const start = Number(doStart);
    if (doStart === "") return "Enter a start (0-5)";
    if (Number.isNaN(start)) return "Not a valid number";
    if (start < 0 || start > 5) return "Start must be 0-5";
    const out = [];
    let i = start;
    do {
      out.push(i);
      i++;
    } while (i <= start + 3);
    console.log("Do...while result:", out);
    return out.join(" → ");
  };

  const breakContinueOutput = () => {
    const max = Number(bcMax);
    if (bcMax === "") return "Enter a max (1-20)";
    if (Number.isNaN(max)) return "Not a valid number";
    if (max < 1 || max > 20) return "Max must be 1-20";
    const out = [];
    for (let i = 1; i <= max; i++) {
      if (i === 3) {
        // continue example: skip 3
        console.log("continue at i=3");
        continue;
      }
      if (i === 8) {
        // break example: stop at 8
        console.log("break at i=8");
        break;
      }
      out.push(i);
    }
    console.log("Break/Continue result:", out);
    return out.join(", ");
  };

  return (
    <div className="conditions-container">
      <h1>Loops Demo</h1>

      <div className="conditions-section">
        <h2>for</h2>
        <label htmlFor="forCount" className="conditions-label">
          Count (0-50)
        </label>
        <input
          id="forCount"
          className="conditions-input"
          type="number"
          value={forCount}
          onChange={handleForCount}
          placeholder="Enter count"
        />
        <div className="conditions-helper">Generates 0..count-1</div>
        <p className="conditions-badge">{forLoopOutput()}</p>
      </div>

      <div className="conditions-section">
        <h2>while</h2>
        <label htmlFor="whileStart" className="conditions-label">
          Start (0-10)
        </label>
        <input
          id="whileStart"
          className="conditions-input"
          type="number"
          value={whileStart}
          onChange={handleWhileStart}
          placeholder="Enter start"
        />
        <div className="conditions-helper">Counts down to 0</div>
        <p className="conditions-badge">{whileLoopOutput()}</p>
      </div>

      <div className="conditions-section">
        <h2>do...while</h2>
        <label htmlFor="doStart" className="conditions-label">
          Start (0-5)
        </label>
        <input
          id="doStart"
          className="conditions-input"
          type="number"
          value={doStart}
          onChange={handleDoStart}
          placeholder="Enter start"
        />
        <div className="conditions-helper">number +3</div>
        <p className="conditions-badge">{doWhileOutput()}</p>
      </div>

      <div className="conditions-section">
        <h2>break & continue</h2>
        <label htmlFor="bcMax" className="conditions-label">
          Max (1-20)
        </label>
        <input
          id="bcMax"
          className="conditions-input"
          type="number"
          value={bcMax}
          onChange={handleBcMax}
          placeholder="Enter max"
        />
        <div className="conditions-helper">
          Skips 3 (continue), stops at 8 (break)
        </div>
        <p className="conditions-badge">{breakContinueOutput()}</p>
      </div>

      <BackButton />
    </div>
  );
};

export default LoopsPage;
