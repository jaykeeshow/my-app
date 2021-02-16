import React, { useState } from "react";
import "./scss/form.css";
const Form = ({ api }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [currentError, setCurrentError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(null);
  const handleLogin = (e) => {
    setLogin(e.target.value);
    if (e.target.value.length <= 4) {
      setCurrentError("Login is too small");
    } else {
      setCurrentError(null);
    }
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length <= 5) {
      setCurrentError("Password is too small");
    } else {
      setCurrentError(null);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentError === null && login !== "" && password !== "") {
      console.log("bezbłędnie!");
      api
        .login({
          username: login,
          password: password,
        })
        .then((response) => {
          setLoggedIn(response);
        })
        .catch((err) => {
          setCurrentError(err);
        });
    }
  };
  if (loggedIn == null) {
    return (
      <>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <h2>Form Center</h2>
            <p>{currentError}</p>

            <label>Login</label>
            <input
              type="text"
              placeholder="hint: coderslab"
              name="login"
              value={login}
              onChange={(e) => handleLogin(e)}
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="hint: qwerty"
              name="password"
              value={password}
              onChange={(e) => handlePassword(e)}
            />

            <input type="submit" value="Login!" />
          </form>
        </div>
      </>
    );
  } else {
    return (
      <form>
        <h2>{loggedIn.username}</h2>
        <h3>Compose your message to Coderslab</h3>
        <ul className="flex-outer">
          <li>
            <label for="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              placeholder="Enter your first name here"
            />
          </li>
          <li>
            <label for="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              placeholder="Enter your last name here"
            />
          </li>
          <li>
            <label for="e-mail">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email here"
            />
          </li>
          <li>
            <label for="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
            />
          </li>
          <li>
            <label for="message">Message</label>
            <textarea
              rows="6"
              id="message"
              placeholder="Enter your message here"
            ></textarea>
          </li>
          <li>
            <p>Age</p>
            <ul className="flex-inner">
              <li>
                <input type="checkbox" id="twenty-to-twentynine" />
                <label for="twenty-to-twentynine">20-29</label>
              </li>
              <li>
                <input type="checkbox" id="thirty-to-thirtynine" />
                <label for="thirty-to-thirtynine">30-39</label>
              </li>
              <li>
                <input type="checkbox" id="forty-to-fortynine" />
                <label for="forty-to-fortynine">40-49</label>
              </li>
              <li>
                <input type="checkbox" id="fifty-to-fiftynine" />
                <label for="fifty-to-fiftynine">50-59</label>
              </li>
              <li>
                <input type="checkbox" id="sixty-to-sixtyynine" />
                <label for="sixty-to-sixtyynine">60-69</label>
              </li>
              <li>
                <input type="checkbox" id="other" />
                <label for="other">Other</label>
              </li>
              <li>
                <button type="submit">Submit</button>
              </li>
            </ul>
          </li>
        </ul>
      </form>
    );
  }
};
export default Form;

//
