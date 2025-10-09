import React, { useState } from "react";
import BackButton from "../components/BackButton";

const DatatypesPage = () => {
  // State for each conversion demo
  const [strInput, setStrInput] = useState("123.45");
  const [strToNum, setStrToNum] = useState(null);
  const [strToNumErr, setStrToNumErr] = useState("");

  const [numInput, setNumInput] = useState("42");
  const [numToStr, setNumToStr] = useState("");
  const [numToStrErr, setNumToStrErr] = useState("");

  const [dateInput, setDateInput] = useState("2025-01-01");
  const [dateToNum, setDateToNum] = useState(null);
  const [dateToNumErr, setDateToNumErr] = useState("");

  const [tsInput, setTsInput] = useState(String(Date.now()));
  const [numToDate, setNumToDate] = useState("");
  const [numToDateErr, setNumToDateErr] = useState("");

  const [boolInput, setBoolInput] = useState("true");
  const [boolToNum, setBoolToNum] = useState(null);
  const [boolToNumErr, setBoolToNumErr] = useState("");

  const [numToBoolInput, setNumToBoolInput] = useState("0");
  const [numToBool, setNumToBool] = useState(null);
  const [numToBoolErr, setNumToBoolErr] = useState("");

  // Converters
  const convertStrToNum = () => {
    const n = Number(strInput);
    if (Number.isNaN(n)) {
      setStrToNumErr("Invalid number string");
      setStrToNum(null);
    } else {
      setStrToNumErr("");
      setStrToNum(n);
    }
  };

  const convertNumToStr = () => {
    const n = Number(numInput);
    if (Number.isNaN(n)) {
      setNumToStrErr("Please enter a valid number");
      setNumToStr("");
    } else {
      setNumToStrErr("");
      setNumToStr(String(n));
    }
  };

  const convertDateToNum = () => {
    const t = new Date(dateInput).getTime();
    if (Number.isNaN(t)) {
      setDateToNumErr("Invalid date/time");
      setDateToNum(null);
    } else {
      setDateToNumErr("");
      setDateToNum(t);
    }
  };

  const convertNumToDate = () => {
    const n = Number(tsInput);
    if (!Number.isFinite(n)) {
      setNumToDateErr("Please enter a valid timestamp ");
      setNumToDate("");
      return;
    }
    const d = new Date(n);
    if (isNaN(d.getTime())) {
      setNumToDateErr("Timestamp not convertible to Date");
      setNumToDate("");
    } else {
      setNumToDateErr("");
      setNumToDate(d.toISOString());
    }
  };

  const convertBoolToNum = () => {
    const v = String(boolInput).trim().toLowerCase();
    if (v === "true") {
      setBoolToNumErr("");
      setBoolToNum(1);
    } else if (v === "false") {
      setBoolToNumErr("");
      setBoolToNum(0);
    } else {
      setBoolToNumErr("Enter 'true' or 'false'");
      setBoolToNum(null);
    }
  };

  const convertNumToBool = () => {
    const n = Number(numToBoolInput);
    if (Number.isNaN(n)) {
      setNumToBoolErr("Please enter a valid number");
      setNumToBool(null);
    } else {
      setNumToBoolErr("");
      setNumToBool(Boolean(n)); // 0 => false, others => true
    }
  };

  return (
    <div className="conditions-container">
      <h1>Datatypes (Type Conversion)</h1>
      <p className="conditions-helper">
        Common JavaScript type conversions with examples.
      </p>

      {/* String -> Number */}
      <div className="conditions-section">
        <h3>Converting Strings to Numbers</h3>
        <div className="conditions-helper" style={{ display: "grid", gap: 8 }}>
          <input
            className="input"
            type="text"
            value={strInput}
            onChange={(e) => setStrInput(e.target.value)}
            placeholder="e.g., 123.45"
          />
          <button className="grid-button" onClick={convertStrToNum}>
            Convert
          </button>
          {strToNumErr && <div style={{ color: "#b00020" }}>{strToNumErr}</div>}
          {strToNum !== null && !strToNumErr && (
            <div>
              Result (Number): <strong>{String(strToNum)}</strong>
            </div>
          )}
        </div>
      </div>

      {/* Number -> String */}
      <div className="conditions-section">
        <h3>Converting Numbers to Strings</h3>
        <div className="conditions-helper" style={{ display: "grid", gap: 8 }}>
          <input
            className="input"
            type="text"
            value={numInput}
            onChange={(e) => setNumInput(e.target.value)}
            placeholder="e.g., 42"
          />
          <button className="grid-button" onClick={convertNumToStr}>
            Convert
          </button>
          {numToStrErr && <div style={{ color: "#b00020" }}>{numToStrErr}</div>}
          {numToStr !== "" && !numToStrErr && (
            <div>
              Result (String): <strong>{numToStr}</strong>
            </div>
          )}
        </div>
      </div>

      {/* Date -> Number */}
      <div className="conditions-section">
        <h3>Converting Dates to Numbers</h3>
        <div className="conditions-helper" style={{ display: "grid", gap: 8 }}>
          <input
            className="input"
            type="date"
            value={dateInput}
            onChange={(e) => setDateInput(e.target.value)}
          />
          <button className="grid-button" onClick={convertDateToNum}>
            Convert
          </button>
          {dateToNumErr && (
            <div style={{ color: "#b00020" }}>{dateToNumErr}</div>
          )}
          {dateToNum !== null && !dateToNumErr && (
            <div>
              Result: <strong>{String(dateToNum)}</strong>
            </div>
          )}
        </div>
      </div>

      {/* Number -> Date */}
      <div className="conditions-section">
        <h3>Converting Numbers to Dates</h3>
        <div className="conditions-helper" style={{ display: "grid", gap: 8 }}>
          <input
            className="input"
            type="text"
            value={tsInput}
            onChange={(e) => setTsInput(e.target.value)}
            placeholder="timestamp in ms"
          />
          <button className="grid-button" onClick={convertNumToDate}>
            Convert
          </button>
          {numToDateErr && (
            <div style={{ color: "#b00020" }}>{numToDateErr}</div>
          )}
          {numToDate && !numToDateErr && (
            <div>
              Result (Date): <strong>{numToDate}</strong>
            </div>
          )}
        </div>
      </div>

      {/* Boolean -> Number */}
      <div className="conditions-section">
        <h3>Converting Booleans to Numbers</h3>
        <div className="conditions-helper" style={{ display: "grid", gap: 8 }}>
          <input
            className="input"
            type="text"
            value={boolInput}
            onChange={(e) => setBoolInput(e.target.value)}
            placeholder="true or false"
          />
          <button className="grid-button" onClick={convertBoolToNum}>
            Convert
          </button>
          {boolToNumErr && (
            <div style={{ color: "#b00020" }}>{boolToNumErr}</div>
          )}
          {boolToNum !== null && !boolToNumErr && (
            <div>
              Result (Number): <strong>{String(boolToNum)}</strong>
            </div>
          )}
        </div>
      </div>

      {/* Number -> Boolean */}
      <div className="conditions-section">
        <h3>Converting Numbers to Booleans</h3>
        <div className="conditions-helper" style={{ display: "grid", gap: 8 }}>
          <input
            className="input"
            type="text"
            value={numToBoolInput}
            onChange={(e) => setNumToBoolInput(e.target.value)}
            placeholder="e.g., 0 => false, others => true"
          />
          <button className="grid-button" onClick={convertNumToBool}>
            Convert
          </button>
          {numToBoolErr && (
            <div style={{ color: "#b00020" }}>{numToBoolErr}</div>
          )}
          {numToBool !== null && !numToBoolErr && (
            <div>
              Result (Boolean): <strong>{String(numToBool)}</strong>
            </div>
          )}
        </div>
      </div>

      <BackButton />
    </div>
  );
};

export default DatatypesPage;
