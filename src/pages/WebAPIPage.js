import React from "react";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";

const WebAPIPage = () => {
  const { useEffect, useRef, useState } = React;
  const navigate = useNavigate();

  // Web Worker (align with snippet: use `w`)
  const w = useRef(null);

  // Fetch API (align with snippet: use getText(file) and update #demo directly)
  const [fetchError, setFetchError] = useState("");

  // Geolocation state
  const geoWatchIdRef = useRef(null);
  const [geoError, setGeoError] = useState("");

  useEffect(() => {
    console.log("WebAPIPage loaded");
  }, []);

  // Load text via Fetch API on mount
  useEffect(() => {
    getText("fetch_info.txt");
  }, []);

  // Cleanup worker and geolocation on unmount
  useEffect(() => {
    return () => {
      if (w.current) {
        w.current.terminate();
        w.current = null;
      }
      if (geoWatchIdRef.current != null && navigator.geolocation) {
        navigator.geolocation.clearWatch(geoWatchIdRef.current);
        geoWatchIdRef.current = null;
      }
    };
  }, []);

  function startWorker() {
    if (!w.current) {
      try {
        // Same as provided snippet
        w.current = new Worker("demo_workers.js");
        w.current.onmessage = function (event) {
          const el = document.getElementById("result");
          if (el) el.innerHTML = event.data;
        };
      } catch (e) {
        console.error("Failed to start worker:", e);
      }
    }
  }

  function stopWorker() {
    if (w.current) {
      w.current.terminate();
      w.current = null;
    }
  }

  function resetWorker() {
    const el = document.getElementById("result");
    if (el) el.innerHTML = "0";
    if (w.current) {
      try {
        w.current.terminate();
      } catch (e) {}
      w.current = null;
    }
  }

  // Fetch API: same words/functions/refs as snippet
  async function getText(file) {
    try {
      let myObject = await fetch(file);
      if (!myObject.ok) throw new Error(`HTTP ${myObject.status}`);
      let myText = await myObject.text();
      const demo = document.getElementById("demo");
      if (demo) demo.innerHTML = myText;
    } catch (e) {
      setFetchError(String(e));
    }
  }

  // Geolocation API: same words/functions/refs as snippet
  function getLocation() {
    setGeoError("");
    if (navigator.geolocation) {
      try {
        const id = navigator.geolocation.watchPosition(showPosition, (err) => {
          setGeoError(err.message || "Failed to get geolocation");
        });
        geoWatchIdRef.current = id;
      } catch (e) {
        setGeoError(String(e));
      }
    } else {
      const x = document.getElementById("geo-demo");
      if (x) x.innerHTML = "Geolocation is not supported by this browser.";
      setGeoError("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    const x = document.getElementById("geo-demo");
    if (x)
      x.innerHTML =
        "Latitude: " +
        position.coords.latitude +
        "<br>Longitude: " +
        position.coords.longitude;
  }

  // Web History API handlers (for the buttons below)
  function goBackTwoPages() {
    try {
      if (window.history.length > 2) {
        window.history.go(-2);
      }
      // else if (window.history.length > 1) {
      //   window.history.back();
      // } else {
      //   navigate("/");
      // }
    } catch (e) {
      console.error("Failed to go back 2 pages:", e);
      navigate("/");
    }
  }

  function goBackOnePage() {
    try {
      window.history.back();
    } catch (e) {
      console.error("Failed to go back:", e);
    }
  }

  return (
    <div className="conditions-container">
      <h1>Web APIs</h1>

      {/* Web Workers API Demo */}
      <div className="conditions-section">
        <h2>JavaScript Web Workers API</h2>
        <p>
          Count numbers: <output id="result"></output>
        </p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button onClick={startWorker}>Start Worker</button>
          <button onClick={stopWorker}>Stop Worker</button>
          <button onClick={resetWorker}>Reset</button>
        </div>
      </div>

      {/* Fetch API Demo */}
      <div className="conditions-section">
        <h2>JavaScript Fetch API</h2>
        <p id="demo">Fetch a file to change this text.</p>
        {fetchError && <p style={{ color: "red" }}>{fetchError}</p>}
      </div>

      {/* Geolocation API Demo */}
      <div className="conditions-section">
        <h2>JavaScript Geolocation API</h2>
        <p>Click the button to get your coordinates.</p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button onClick={getLocation}>Try It</button>
        </div>
        <p id="geo-demo" className="conditions-helper">
          No coordinates yet.
        </p>
        {geoError && <p style={{ color: "red" }}>{geoError}</p>}
      </div>

      {/* Web History API Demo */}
      <div className="conditions-section">
        <h2>JavaScript Web History API</h2>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button onClick={goBackTwoPages}>Go Back 2 Pages</button>
          <button onClick={goBackOnePage}>Go Back</button>
        </div>
      </div>

      <BackButton />
    </div>
  );
};

export default WebAPIPage;
