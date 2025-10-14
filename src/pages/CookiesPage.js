import React, { useEffect } from "react";
import BackButton from "../components/BackButton";

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user !== "") {
    alert("Welcome again " + user);
  } else {
    // Using window.prompt to match the provided snippet behavior
    user = window.prompt("Please enter your name:", "");
    if (user !== "" && user != null) {
      setCookie("username", user, 30);
    }
  }
}

const CookiesPage = () => {
  const hasRunRef = React.useRef(false);
  React.useEffect(() => {
    // Prevent double-invoke in React StrictMode (dev) by guarding with a ref
    if (hasRunRef.current) return;
    hasRunRef.current = true;
    checkCookie();
  }, []);
  useEffect(() => {
    console.log("CookiesPage loaded");
  }, []);
  // Navigator info adapted from provided snippets
  const cookiesEnabled =
    typeof navigator !== "undefined" ? navigator.cookieEnabled : undefined;
  const online =
    typeof navigator !== "undefined" ? navigator.onLine : undefined;
  const appName =
    typeof navigator !== "undefined" ? navigator.appName : undefined;
  const product =
    typeof navigator !== "undefined" ? navigator.product : undefined;
  return (
    <div className="conditions-container">
      <h1>Cookies Demo</h1>
      <p className="conditions-helper">
        Cookies are small data stored in the user's browser. They are used to
        store user preferences, authentication information, and other data.
      </p>
      <div>
        <p id="cookiesEnabled">cookiesEnabled is {String(cookiesEnabled)}</p>
        <p id="online">{String(online)}</p>
        <p id="appName">navigator.appName is {String(appName)}</p>
        <p id="product">navigator.product is {String(product)}</p>
      </div>
      <BackButton />
    </div>
  );
};

export default CookiesPage;
