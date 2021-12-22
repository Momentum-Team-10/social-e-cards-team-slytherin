import { useState } from 'react'
import axios from 'axios'

export default function Registration({ setAuth }) {
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    axios
      .post('https://greeterycards.herokuapp.com/ecard/new_user', {
        email: email,
        username: username,
        password: password,
      })
      .then((res) => {
        return axios
          .post('https://greeterycards.herokuapp.com/auth/token/login', {
            username: username,
            password: password,
          })
          .then((data) => {
            if (data && data.data.auth_token) {
              setAuth(data.data.auth_token)
            }
          })
      })
  }

  const handleChange = (inputType, event) => {
    if (inputType === 'username') {
      setUsername(event.target.value)
    }
    if (inputType === 'password') {
      setPassword(event.target.value)
    }
    if (inputType === 'email') {
      setEmail(event.target.value)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>email</label>
        <input
          type="text"
          placeholder="jane@gmail.com"
          value={email}
          onChange={(e) => handleChange('email', e)}
        />
        <label>Username</label>
        <input
          type="text"
          placeholder="janedoge123"
          value={username}
          onChange={(e) => handleChange('username', e)}
        />
        <label>Password</label>
        <input
          placeholder="password"
          type="password"
          // using state to pass a value to this attribute
          // makes this a controlled component
          value={password}
          onChange={(e) => handleChange('password', e)}
        />
        <div>
          <button type="submit">
            Create Account
          </button>
        </div>
      </form>
    </div>
  )}
