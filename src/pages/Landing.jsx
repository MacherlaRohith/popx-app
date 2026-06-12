import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Landing.css'

const Landing = () => {
  const navigate = useNavigate()

  return (
    <div className="landing-page">
      {/* Top area - illustration placeholder */}
      <div className="landing-top" />

      {/* Bottom content */}
      <div className="landing-content">
        <h1 className="landing-title">Welcome to PopX</h1>
        <p className="landing-subtitle">
          Lorem ipsum dolor sit amet,{'\n'}consectetur adipiscing elit,
        </p>

        <button
          id="btn-create-account"
          className="btn btn-primary"
          onClick={() => navigate('/signup')}
        >
          Create Account
        </button>

        <button
          id="btn-login"
          className="btn btn-secondary"
          onClick={() => navigate('/login')}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  )
}

export default Landing
