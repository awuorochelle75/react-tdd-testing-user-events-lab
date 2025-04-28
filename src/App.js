import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState({
    tech: false,
    design: false,
    marketing: false,
  });
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedInterests = Object.keys(interests).filter((key) => interests[key]);
    setMessage(
      `Thank you, ${name}! You have successfully signed up for the newsletter. You are interested in: ${selectedInterests.join(", ")}`
    );
  };

  const handleCheckboxChange = (e) => {
    setInterests({
      ...interests,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="tech"
              checked={interests.tech}
              onChange={handleCheckboxChange}
            />
            Tech
          </label>
          <label>
            <input
              type="checkbox"
              name="design"
              checked={interests.design}
              onChange={handleCheckboxChange}
            />
            Design
          </label>
          <label>
            <input
              type="checkbox"
              name="marketing"
              checked={interests.marketing}
              onChange={handleCheckboxChange}
            />
            Marketing
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>

      {message && <p>{message}</p>}
    </main>
  );
}

export default App;
