import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }

  return (
    <div>
      <div className="card">
                <h2>Login</h2>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="username">username</label>
                            <input 
                                type="text"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="password">password</label>
                            <input 
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                    </div>
                    <Link to="/">
                    <input type="submit" onClick={handleSubmit} value="Login"></input>
                    </Link>
                </div>
            </div>
      
    </div>
  );
}

export default Login;