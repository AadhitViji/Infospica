import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";

// Demonstrates: Callbacks, Promises, Asynchronous (Callback), Async/Await
const PromisesPage = () => {
  // Callbacks demo
  const [cbResult, setCbResult] = useState("");

  // Promises demo
  const [promiseStatus, setPromiseStatus] = useState("Idle");
  const [promiseValue, setPromiseValue] = useState("");

  // Asynchronous (Callback) demo
  const [asyncCbValue, setAsyncCbValue] = useState("");

  // Async/Await demo
  const [asyncThenValue, setAsyncThenValue] = useState("");
  const [awaitValue, setAwaitValue] = useState("");

  useEffect(() => {
    console.log("PromisesPage loaded");
  }, []);

  // Callbacks (myDisplayer/myCalculator)
  const myDisplayer = (some) => setCbResult(String(some));
  const myCalculator = (num1, num2) => num1 + num2;
  const runCallbackDemo = () => myDisplayer(myCalculator(5, 5));

  // Promises
  const runPromiseDemo = (shouldResolve = true) => {
    setPromiseStatus("Pending...");
    setPromiseValue("");
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(
        () =>
          shouldResolve
            ? resolve("Simulated file response (status 200)")
            : reject("File not Found"),
        800
      );
    });
    myPromise.then(
      (value) => {
        setPromiseStatus("Resolved");
        setPromiseValue(String(value));
      },
      (error) => {
        setPromiseStatus("Rejected");
        setPromiseValue(String(error));
      }
    );
  };

  // Asynchronous (callback) demo — using setTimeout
  const runAsyncCallbackDemo = () => {
    setAsyncCbValue("Fetching data...");
    setTimeout(() => {
      setAsyncCbValue("Data received after 2 seconds");
    }, 2000);
  };

  // Async/Await
  async function asyncHello() {
    return "Hello";
  }
  const runAsyncThenDemo = () => {
    asyncHello().then(
      (value) => setAsyncThenValue(String(value)),
      (error) => setAsyncThenValue(String(error))
    );
  };
  const runAwaitDemo = async () => {
    const myPromise = new Promise((resolve) =>
      setTimeout(() => resolve("bye!!"), 2000)
    );
    const value = await myPromise;
    setAwaitValue(String(value));
  };

  return (
    <div className="conditions-container">
      <h1>Promises & Async Demo</h1>

      {/* Callbacks */}
      <div className="conditions-section">
        <h2>Callbacks</h2>
        <div className="conditions-helper">
          myCalculator(5, 5) → myDisplayer(result)
        </div>
        <div className="checkbox-row" style={{ gap: 8 }}>
          <button
            className="demo-button"
            type="button"
            onClick={runCallbackDemo}
          >
            Run Callback Demo
          </button>
        </div>
        <p className="conditions-badge">Displayed: {cbResult || "—"}</p>
      </div>

      {/* Promises */}
      <div className="conditions-section">
        <h2>Promises</h2>
        <div className="conditions-helper">
          Simulated resolve/reject with Promise.then()
        </div>
        <div className="checkbox-row" style={{ gap: 8 }}>
          <button
            className="demo-button"
            type="button"
            onClick={() => runPromiseDemo(true)}
          >
            Resolve
          </button>
          <button
            className="demo-button"
            type="button"
            onClick={() => runPromiseDemo(false)}
          >
            Reject
          </button>
        </div>
        <p className="conditions-badge">Status: {promiseStatus}</p>
        <p className="conditions-badge">Value: {promiseValue || "—"}</p>
      </div>

      {/* Asynchronous */}
      <div className="conditions-section">
        <h2>Asynchronous (Callback)</h2>
        <div className="conditions-helper">
          Simulated delayed data fetch (2s) using setTimeout
        </div>
        <div className="checkbox-row" style={{ gap: 8 }}>
          <button
            className="demo-button"
            type="button"
            onClick={runAsyncCallbackDemo}
          >
            Run Callback
          </button>
        </div>
        <p className="conditions-badge">Displayed: {asyncCbValue || "—"}</p>
      </div>

      {/* Async / Await */}
      <div className="conditions-section">
        <h2>Async / Await</h2>
        <div className="conditions-helper">
          Two demos: async function returning Hello, and awaiting a
          Promise("bye!!")
        </div>
        <div className="checkbox-row" style={{ gap: 8 }}>
          <button
            className="demo-button"
            type="button"
            onClick={runAsyncThenDemo}
          >
            Run asyncHello().then()
          </button>
          <button className="demo-button" type="button" onClick={runAwaitDemo}>
            Run await Promise
          </button>
        </div>
        <p className="conditions-badge">then value: {asyncThenValue || "—"}</p>
        <p className="conditions-badge">await value: {awaitValue || "—"}</p>
      </div>

      <BackButton />
    </div>
  );
};

export default PromisesPage;
