import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    navigate('/profile')
  }

  return (
    <div className="login-page">
      <div className="login-content">
        <h1 className="login-title">
          Signin to your{'\n'}PopX account
        </h1>
        <p className="login-subtitle">
          Lorem ipsum dolor sit amet,{'\n'}consectetur adipiscing elit,
        </p>

        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <label className="input-label" htmlFor="login-email">
              Email Address
            </label>
            <input
              id="login-email"
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
            />
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="login-password">
              Password
            </label>
            <input
              id="login-password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            />
          </div>

          <button
            id="btn-login-submit"
            type="submit"
            className="btn btn-disabled"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
