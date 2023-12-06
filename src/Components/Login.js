import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import './Styles.css';

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateUserData = () => {
    if (username === "") {
      setUsernameError("Username cannot be empty");
      return false;
    }

    if (email === "") {
      setEmailError("Email cannot be empty");
      return false;
    } else if (!isValidEmail(email)) {
      setEmailError("Invalid email format");
      return false;
    }

    if (password === "") {
      return false;
    }

    if (role === "") {
      return false;
    }

    return true;
  };

  const isValidEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const loginUser = (event) => {
    event.preventDefault();
    const isValidData = validateUserData();

    if (!isValidData) {
      alert("Please check your data");
      return;
    }

    axios
      .post("http://localhost:5095/api/Customer/Login", {
        username: username,
        email: email,
        password: password,
        role: role,
      })
      .then((userData) => {
        console.log(userData);
        onLogin(); // Call the parent component's callback on successful login
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form className="loginForm">
      <div className="formGroup">
        <label className="formLabel">Username</label>
        <input
          type="text"
          className="formInput"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <div className="error">{usernameError}</div>
      </div>

      <div className="formGroup">
        <label className="formLabel">Email</label>
        <input
          type="email"
          className="formInput"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <div className="error">{emailError}</div>
      </div>

      <div className="formGroup">
        <label className="formLabel">Password</label>
        <input
          type="password"
          className="formInput"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>

      <div className="formGroup">
        <label className="formLabel">Role</label>
        <input
          type="text"
          className="formInput"
          value={role}
          onChange={(e) => {
            setRole(e.target.value);
          }}
        />
      </div>

      <div className="formGroup">
  <div className="buttonContainer">
    <button className="buttonPrimary" onClick={loginUser}>
      Login
    </button>
    <button className="buttonDanger" onClick={() => {}}>
      Cancel
    </button>
  </div>
</div>

    </form>
  );
}

export default Login;