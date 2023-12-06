import { useState } from "react";

import './RegisterUser.css';
import axios from "axios";
import './Styles.css';

function Register() {

  const roles = ["User", "Admin"];
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [role, setRole] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const checkUserData = () => {
    if (username === "") {
      setUsernameError("Username cannot be empty");
      return false;
    }

    if (email === "") {
      return false;
    }

    if (password === "" || repassword === "") {
      return false;
    }

    if (password !== repassword) {
      return false;
    }

    if (role === "Select Role") {
      return false;
    }

    return true;
  };

  const signUp = (event) => {
    event.preventDefault();
    const isValidData = checkUserData();

    if (!isValidData) {
      alert('Please check your data');
      return;
    }

    axios.post("http://localhost:5095/api/Customer/Register", {
      username: username,
      email: email,
      role: role,
      password: password,
    })
      .then((response) => {
        // Handle success, e.g., redirect to login page
        console.log(response.data);
        alert("Registration successful! Redirect to login.");
         
      })
      .catch((error) => {
        // Handle error, e.g., display an error message
        console.error(error);
        alert("Registration failed. Please try again.");
      });
  };

  return (
    <form className="registerForm">
      <label className="form-control">Username</label>
      <input
        type="text"
        className="form-control"
        value={username}
        onChange={(e) => { setUsername(e.target.value) }}
      />
      <label className="alert alert-danger">{usernameError}</label>
      <label className="form-control">Email</label>
      <input
        type="email"
        className="form-control"
        value={email}
        onChange={(e) => { setEmail(e.target.value) }}
      />
      <label className="form-control">Password</label>
      <input
        type="password"
        className="form-control"
        value={password}
        onChange={(e) => { setPassword(e.target.value) }}
      />
      <label className="form-control">Re-Type Password</label>
      <input
        type="password"
        className="form-control"
        value={repassword}
        onChange={(e) => { setRePassword(e.target.value) }}
      />
      <label className="form-control">Role</label>
      <select
        className="form-select"
        onChange={(e) => { setRole(e.target.value) }}
      >
        <option value="select">Select Role</option>
        {roles.map((r) =>
          <option value={r} key={r}>{r}</option>
        )}
      </select>
      <br />
      <button
        className="btn btn-primary button"
        onClick={signUp}
      >
        Sign Up
      </button>
      <button
        className="btn btn-danger button"
        onClick={() => { /* Handle cancel action */ }}
      >
        Cancel
      </button>
    </form>
  );
}

export default Register;