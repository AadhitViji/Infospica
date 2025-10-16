import React, { useState } from "react";

function ContactForm() {
  // inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({});
  
  // submitted arrays
  const [names, setNames] = useState([]);
  const [emails, setEmails] = useState([]);
  const [messages, setMessages] = useState([]);

  function onSubmit(e) {
    e.preventDefault();
    const nextErrors = {};
    if (!name.trim()) nextErrors.name = "Name is required";
    if (!email.trim()) nextErrors.email = "Email is required";
    else if (!/.+@.+\..+/.test(email)) nextErrors.email = "Enter a valid email";
    if (!message.trim()) nextErrors.message = "Message is required";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // push to arrays
    setNames([...names, name.trim()]);
    setEmails([...emails, email.trim()]);
    setMessages([...messages, message.trim()]);

    // reset inputs
    setName("");
    setEmail("");
    setMessage("");
  }

  function clearAll() {
    setNames([]);
    setEmails([]);
    setMessages([]);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div style={{ marginBottom: 8 }}>
          <label>
            Name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ display: "block", padding: 6, width: 280, marginTop: 4 }}
              placeholder="Enter your name"
            />
          </label>
          {errors.name && <div style={{ color: "red", fontSize: 12 }}>{errors.name}</div>}
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ display: "block", padding: 6, width: 280, marginTop: 4 }}
              placeholder="you@example.com"
            />
          </label>
          {errors.email && <div style={{ color: "red", fontSize: 12 }}>{errors.email}</div>}
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>
            Message
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              style={{ display: "block", padding: 6, width: 280, marginTop: 4 }}
              placeholder="Type your message"
            />
          </label>
          {errors.message && <div style={{ color: "red", fontSize: 12 }}>{errors.message}</div>}
        </div>

        <div>
          <button type="submit" style={{ padding: "6px 10px", marginRight: 8 }}>
            Submit
          </button>
          <button type="button" onClick={clearAll} style={{ padding: "6px 10px" }}>
            Clear Submissions
          </button>
        </div>
      </form>

      <div style={{ marginTop: 16 }}>
        <div style={{ marginBottom: 6 }}>Submitted data (arrays):</div>
        <div>
          <div><strong>Names:</strong> [{names.join(", ")}]</div>
          <div><strong>Emails:</strong> [{emails.join(", ")}]</div>
          <div><strong>Messages:</strong> [{messages.join(", ")}]</div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
