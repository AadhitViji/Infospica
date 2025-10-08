import React, { useEffect, useMemo, useState } from "react";
import BackButton from "../components/BackButton";

const FunctionsPage = () => {
  // Function Declaration: add two numbers
  const [addA, setAddA] = useState("");
  const [addB, setAddB] = useState("");

  // Arrow Function: multiply two numbers
  const [mulA, setMulA] = useState("");
  const [mulB, setMulB] = useState("");

  // Default Parameters: greeting
  const [name, setName] = useState("");

  // Arguments demo (using arguments object)
  const [argsList, setArgsList] = useState("");

  // Functions as variables demo
  const [fnOp, setFnOp] = useState("add");
  const [fnA, setFnA] = useState("");
  const [fnB, setFnB] = useState("");

  useEffect(() => {
    console.log("FunctionsPage loaded");
  }, []);

  // Function Declaration
  function add(x = 0, y = 0) {
    return x + y;
  }

  // Arrow Function
  const multiply = (x = 0, y = 0) => x * y;

  // Default Parameter function
  function greet(person = "Guest") {
    return `Hello, ${person}!`;
  }

  // Arguments object demo
  function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
      total += Number(arguments[i]) || 0;
    }
    console.log("sum() arguments.length =", arguments.length, "total =", total);
    return { total, count: arguments.length };
  }

  // Memoized computation for arguments demo
  const sumResult = useMemo(() => {
    if (!argsList) return "Enter comma separated numbers";
    const arr = argsList.split(",").map((s) => Number(s.trim()));
    if (arr.some((n) => Number.isNaN(n)))
      return "List contains invalid number(s)";
    const { total, count } = sum(...arr);
    return `args: ${count}, total: ${total}`;
  }, [argsList]);

  // Functions as Variables Demo
  const fnVariableResult = useMemo(() => {
    const a = Number(fnA);
    const b = Number(fnB);
    if (fnA === "" || fnB === "") return "Enter A and B";
    if (Number.isNaN(a) || Number.isNaN(b)) return "Invalid numbers";

    // Function as variable
    let operation = add; // default
    if (fnOp === "multiply") operation = multiply;

    const result = operation(a, b);
    console.log("Functions as variables result:", result);
    return String(result);
  }, [fnOp, fnA, fnB]);

  return (
    <div className="conditions-container">
      <h1>Functions Demo</h1>

      {/* Function Declaration */}
      <div className="conditions-section">
        <h2>Function Declaration (add)</h2>
        <label htmlFor="addA" className="conditions-label">
          A
        </label>
        <input
          id="addA"
          className="conditions-input"
          type="number"
          value={addA}
          onChange={(e) => setAddA(e.target.value)}
          placeholder="Enter number"
        />
        <label htmlFor="addB" className="conditions-label">
          B
        </label>
        <input
          id="addB"
          className="conditions-input"
          type="number"
          value={addB}
          onChange={(e) => setAddB(e.target.value)}
          placeholder="Enter number"
        />
        <div className="conditions-helper">add(a, b)</div>
        <p className="conditions-badge">
          Result: {add(Number(addA), Number(addB))}
        </p>
      </div>

      {/* Arrow Function */}
      <div className="conditions-section">
        <h2>Arrow Function (multiply)</h2>
        <label htmlFor="mulA" className="conditions-label">
          A
        </label>
        <input
          id="mulA"
          className="conditions-input"
          type="number"
          value={mulA}
          onChange={(e) => setMulA(e.target.value)}
          placeholder="Enter number"
        />
        <label htmlFor="mulB" className="conditions-label">
          B
        </label>
        <input
          id="mulB"
          className="conditions-input"
          type="number"
          value={mulB}
          onChange={(e) => setMulB(e.target.value)}
          placeholder="Enter number"
        />
        <div className="conditions-helper">(a, b) =&gt; a * b</div>
        <p className="conditions-badge">
          Result: {multiply(Number(mulA), Number(mulB))}
        </p>
      </div>

      {/* Default Parameters */}
      <div className="conditions-section">
        <h2>Default Parameters</h2>
        <label htmlFor="nameInput" className="conditions-label">
          Name
        </label>
        <input
          id="nameInput"
          className="conditions-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name (optional)"
        />
        <div className="conditions-helper">greet(name = 'Guest')</div>
        <p className="conditions-badge">{greet(name || undefined)}</p>
      </div>

      {/* Arguments Demo */}
      <div className="conditions-section">
        <h2>Arguments</h2>
        <label htmlFor="argsList" className="conditions-label">
          Comma-separated numbers
        </label>
        <input
          id="argsList"
          className="conditions-input"
          type="text"
          value={argsList}
          onChange={(e) => setArgsList(e.target.value)}
          placeholder="e.g. 1, 2, 3"
        />
        <div className="conditions-helper">
          <code>
            function sum() {"{"} /* uses arguments */ {"}"}
          </code>
        </div>
        <p className="conditions-badge">{sumResult}</p>
      </div>

      {/* Functions as Variables Demo */}
      <div className="conditions-section">
        <h2>Functions as Variables</h2>
        <label htmlFor="opSelect" className="conditions-label">
          Operation
        </label>
        <select
          id="opSelect"
          className="conditions-select"
          value={fnOp}
          onChange={(e) => setFnOp(e.target.value)}
        >
          <option value="add">add</option>
          <option value="multiply">multiply</option>
        </select>
        <label htmlFor="fnA" className="conditions-label">
          A
        </label>
        <input
          id="fnA"
          className="conditions-input"
          type="number"
          value={fnA}
          onChange={(e) => setFnA(e.target.value)}
          placeholder="Enter number"
        />
        <label htmlFor="fnB" className="conditions-label">
          B
        </label>
        <input
          id="fnB"
          className="conditions-input"
          type="number"
          value={fnB}
          onChange={(e) => setFnB(e.target.value)}
          placeholder="Enter number"
        />
        <div className="conditions-helper">
          let operation = add; if (fnOp === "multiply") operation = multiply;
        </div>
        <p className="conditions-badge">Result: {fnVariableResult}</p>
      </div>

      <BackButton />
    </div>
  );
};

export default FunctionsPage;
