import "./App.scss";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState({});

  // FUNCTION
  const handleUsername = (e) => {
    let _username = e.target.value;
    setUsername(_username);
  };

  const handlePassword = (e) => {
    let _password = e.target.value;
    setPassword(_password);
  };

  const handleButton = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    };
    const response = await fetch("http://localhost:3005/login", requestOptions);
    const _currentUser = await response.json();
    setCurrentUser(prev => ({ ...prev, ..._currentUser }));
  }

  return (
    <div className="App">
      <h2>
        Current User: {currentUser.firstName} {currentUser.lastName}
      </h2>
      <form>
        <fieldset>
          <legend>Login</legend>
          <div className="row">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsername}
            />
          </div>
          <div className="row">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePassword}
            />
          </div>
          <div className="buttonRow">
            <button onClick={handleButton}>Login</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
