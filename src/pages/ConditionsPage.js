import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";

const ConditionsPage = () => {
  // If
  const [number, setNumber] = useState("");

  // If...else
  const [hour, setHour] = useState("");

  // If...else if...else
  const [score, setScore] = useState("");

  // Switch
  const [dayIndex, setDayIndex] = useState("1");

  // Ternary
  const [age, setAge] = useState("");

  // Booleans & Logical
  const [flag, setFlag] = useState(false);
  const [condA, setCondA] = useState(false);
  const [condB, setCondB] = useState(false);

  useEffect(() => {
    console.log("ConditionsPage loaded");
  }, []);

  // console outputs
  const handleNumberChange = (e) => {
    setNumber(e.target.value);
    console.log(`If example - number changed: ${e.target.value}`);
  };

  const handleHourChange = (e) => {
    setHour(e.target.value);
    console.log(`If/Else example - hour changed: ${e.target.value}`);
  };

  const handleScoreChange = (e) => {
    setScore(e.target.value);
    console.log(`If/Else If/Else example - score changed: ${e.target.value}`);
  };

  const handleDayChange = (e) => {
    setDayIndex(e.target.value);
    console.log(`Switch example - day index changed: ${e.target.value}`);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
    console.log(`Ternary example - age changed: ${e.target.value}`);
  };

  const handleFlagToggle = (e) => {
    setFlag(e.target.checked);
    console.log(`Booleans example - flag toggled: ${e.target.checked}`);
  };

  const handleCondAToggle = (e) => {
    setCondA(e.target.checked);
    console.log(`Logical example - A toggled: ${e.target.checked}`);
  };

  const handleCondBToggle = (e) => {
    setCondB(e.target.checked);
    console.log(`Logical example - B toggled: ${e.target.checked}`);
  };

  // Derived values
  const ifMessage = () => {
    let text = "";
    const ageVal = Number(number);
    if (number === "") text = "Enter your age";
    if (Number.isNaN(ageVal)) text = "Not a valid number";

    if (ageVal >= 18) {
      text = "You can drive";
    }
    if (ageVal <= 18) {
      text = "You can drive with adult supervision";
    }
    return text;
  };

  // If...Else example: greeting by hour
  const greetingMessage = () => {
    const h = Number(hour);
    let greeting = "";
    if (hour === "") greeting = "Enter hour (0-23)";
    if (Number.isNaN(h)) greeting = "Not a valid number";
    if (h < 0 || h > 23) greeting = "Hour must be between 0 and 23";

    if (h < 18) {
      greeting = "Good day";
    } else {
      greeting = "Good evening";
    }
    return greeting;
  };

  const gradeMessage = () => {
    const n = Number(score);
    if (score === "") return "Enter a score (0-100)";
    if (Number.isNaN(n)) return "Not a valid number";
    if (n >= 90) return "Grade A";
    else if (n >= 75) return "Grade B";
    else if (n >= 60) return "Grade C";
    else if (n >= 40) return "Grade D";
    else return "Grade F";
  };

  const dayFromSwitch = () => {
    switch (dayIndex) {
      case "1":
        return "Monday";
      case "2":
        return "Tuesday";
      case "3":
        return "Wednesday";
      case "4":
        return "Thursday";
      case "5":
        return "Friday";
      case "6":
        return "Saturday";
      case "7":
        return "Sunday";
      default:
        return "Unknown";
    }
  };

  const isAdult = () => {
    const n = Number(age);
    if (age === "") return "Enter your age";
    if (Number.isNaN(n)) return "Not a valid number";
    return n >= 18 ? "Adult" : "Minor";
  };

  return (
    <div className="conditions-container">
      <h1>Conditions Demo</h1>

      <div className="conditions-section">
        <h2>If</h2>
        <label htmlFor="drivingAge" className="conditions-label">
          Age
        </label>
        <input
          id="drivingAge"
          className="conditions-input"
          type="text"
          value={number}
          onChange={handleNumberChange}
          placeholder="Enter your age"
        />
        <div className="conditions-helper">
          If age is 18 or more, you can drive.
        </div>
        <p className="conditions-badge">{ifMessage()}</p>
      </div>

      <div className="conditions-section">
        <h2>If...Else</h2>
        <label htmlFor="greetingHour" className="conditions-label">
          Hour (0-23)
        </label>
        <input
          id="greetingHour"
          className="conditions-input"
          type="number"
          value={hour}
          onChange={handleHourChange}
          placeholder="Enter hour (0-23)"
        />
        <div className="conditions-helper">
          Before 18 → Good day, otherwise → Good evening.
        </div>
        <p className="conditions-badge">{greetingMessage()}</p>
      </div>

      <div className="conditions-section">
        <h2>If...Else If...Else</h2>
        <label htmlFor="scoreInput" className="conditions-label">
          Score
        </label>
        <input
          id="scoreInput"
          className="conditions-input"
          type="number"
          value={score}
          onChange={handleScoreChange}
          placeholder="Enter score (0-100)"
        />
        <div className="conditions-helper">
          90+: A, 75+: B, 60+: C, 40+: D, else F.
        </div>
        <p className="conditions-badge">{gradeMessage()}</p>
      </div>

      <div className="conditions-section">
        <h2>Switch</h2>
        <label htmlFor="daySelect" className="conditions-label">
          Select a day
        </label>
        <select
          id="daySelect"
          className="conditions-select"
          value={dayIndex}
          onChange={handleDayChange}
        >
          <option value="1">Monday</option>
          <option value="2">Tuesday</option>
          <option value="3">Wednesday</option>
          <option value="4">Thursday</option>
          <option value="5">Friday</option>
          <option value="6">Saturday</option>
          <option value="7">Sunday</option>
        </select>
        <p className="conditions-badge">Day: {dayFromSwitch()}</p>
      </div>

      <div className="conditions-section">
        <h2>Ternary (? :)</h2>
        <label htmlFor="adultAge" className="conditions-label">
          Age
        </label>
        <input
          id="adultAge"
          className="conditions-input"
          type="number"
          value={age}
          onChange={handleAgeChange}
          placeholder="Enter your age"
        />
        <div className="conditions-helper">
          <code>age {">="} 18 ? Adult : Minor</code>
        </div>
        <p className="conditions-badge">{isAdult()}</p>
      </div>

      <div className="conditions-section">
        <h2>Booleans</h2>
        <label>
          <input type="checkbox" checked={flag} onChange={handleFlagToggle} />{" "}
          Toggle flag
        </label>
        <p className="conditions-badge">Flag is {flag ? "true" : "false"}</p>
      </div>

      <div className="conditions-section">
        <h2>Logical (&&, ||, !)</h2>
        <div className="checkbox-row">
          <label>
            <input
              type="checkbox"
              checked={condA}
              onChange={handleCondAToggle}
            />{" "}
            A
          </label>
          <label>
            <input
              type="checkbox"
              checked={condB}
              onChange={handleCondBToggle}
            />{" "}
            B
          </label>
        </div>
        <p className="conditions-badge">A && B = {String(condA && condB)}</p>
        <p className="conditions-badge">A || B = {String(condA || condB)}</p>
        <p className="conditions-badge">!A = {String(!condA)}</p>
      </div>

      <BackButton />
    </div>
  );
};

export default ConditionsPage;
