import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Signup.css'

const Signup = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    agency: 'yes',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/profile')
  }

  return (
    <div className="signup-page">
      <div className="signup-content">
        <h1 className="signup-title">
          Create your{'\n'}PopX account
        </h1>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="input-label" htmlFor="signup-fullname">
              Full Name<span className="required">*</span>
            </label>
            <input
              id="signup-fullname"
              type="text"
              name="fullName"
              placeholder="Marry Doe"
              value={formData.fullName}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="signup-phone">
              Phone number<span className="required">*</span>
            </label>
            <input
              id="signup-phone"
              type="tel"
              name="phone"
              placeholder="Marry Doe"
              value={formData.phone}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="signup-email">
              Email address<span className="required">*</span>
            </label>
            <input
              id="signup-email"
              type="email"
              name="email"
              placeholder="Marry Doe"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="signup-password">
              Password <span className="required">*</span>
            </label>
            <input
              id="signup-password"
              type="password"
              name="password"
              placeholder="Marry Doe"
              value={formData.password}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="signup-company">
              Company name
            </label>
            <input
              id="signup-company"
              type="text"
              name="company"
              placeholder="Marry Doe"
              value={formData.company}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <div className="radio-group">
            <p className="radio-label">
              Are you an Agency?<span className="required">*</span>
            </p>
            <div className="radio-options">
              <label className="radio-option" htmlFor="agency-yes">
                <input
                  id="agency-yes"
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={formData.agency === 'yes'}
                  onChange={handleChange}
                />
                <span className="radio-custom" />
                <span className="radio-text">Yes</span>
              </label>

              <label className="radio-option" htmlFor="agency-no">
                <input
                  id="agency-no"
                  type="radio"
                  name="agency"
                  value="no"
                  checked={formData.agency === 'no'}
                  onChange={handleChange}
                />
                <span className="radio-custom" />
                <span className="radio-text">No</span>
              </label>
            </div>
          </div>

          <button
            id="btn-signup-submit"
            type="submit"
            className="btn btn-primary"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signup
