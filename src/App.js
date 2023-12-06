import React, { useState } from 'react';
import Welcome from './Components/Welcome';
import Login from './Components/Login';
import RegisterUser from './Components/RegisterUser';
import CreateSurvey from './Components/CreateSurvey';
import SurveySubmissionComponent from './Components/SurveySubmissionComponent';
import SurveyDropdown from './Components/SurveyDropdown';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginSelected, setIsLoginSelected] = useState(false);
  const [isRegisterSelected, setIsRegisterSelected] = useState(false);
  const [selectedSurvey, setSelectedSurvey] = useState('');

  const handleLoginSelect = () => {
    setIsLoginSelected(true);
    setIsRegisterSelected(false);
  };

  const handleRegisterSelect = () => {
    setIsLoginSelected(false);
    setIsRegisterSelected(true);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsLoginSelected(false);
    setIsRegisterSelected(false);
  };

  const handleRegister = () => {
    setIsLoggedIn(true);
    setIsLoginSelected(false);
    setIsRegisterSelected(false);
  };

  const handleSurveySelect = (survey) => {
    setSelectedSurvey(survey);
  };

  const renderAuthLinks = () => {
    if (isLoggedIn) {
      return (
        <>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/surveys">Surveys</Link>
          </li>
          <li>
            <Link to="/create-survey">Create Survey</Link>
          </li>
        </>
      );
    } else if (isLoginSelected || isRegisterSelected) {
      return (
        <>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            {renderAuthLinks()}
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route
            path="/login"
            element={
              !isLoggedIn && !isLoginSelected && !isRegisterSelected ? (
                <Login onLogin={handleLogin} />
              ) : null
            }
          />
          <Route
            path="/register"
            element={
              !isLoggedIn && !isLoginSelected && !isRegisterSelected ? (
                <RegisterUser onRegister={handleRegister} />
              ) : null
            }
          />
          <Route
            path="/surveys"
            element={
              isLoggedIn ? (
                <div>
                  <SurveyDropdown onSelectSurvey={handleSurveySelect} />
                  <SurveySubmissionComponent selectedSurvey={selectedSurvey} />
                </div>
              ) : null
            }
          />
          <Route
            path="/create-survey"
            element={
              isLoggedIn ? (
                <CreateSurvey />
              ) : null
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
