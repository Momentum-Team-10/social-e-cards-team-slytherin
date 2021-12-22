import React, { useState } from "react";
import axios from "axios";


export default function Login({ setAuth }) {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault()
    axios 
    .post('https://greeterycards.herokuapp.com/auth/token/login', {
      username: username,
      password: password,
    })
    .then((res) => {
      console.log(res)
      if (res.data.auth_token) {
        setAuth(username, res.data.auth_token)
      }
    })
  }

  return (
    <>
          <div>
            <h2>Please Log In</h2>
            <form onSubmit={handleSubmit}>
                <div>
                <label>Username </label>
                <input
                type="text"
                id="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                />
              </div>

              <div>
                <label>Password </label>
                <input
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div>
                <button type="submit">Log In</button>
              </div>
            </form>
            </div>
      </>
  )} 
