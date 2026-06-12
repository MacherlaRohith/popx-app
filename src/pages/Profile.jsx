import React from 'react'
import './Profile.css'
import profileAvatar from '../assets/profile-avatar.png'

const Profile = () => {
  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1 className="profile-title">Account Settings</h1>
      </div>

      <div className="profile-content">
        <div className="profile-user-info">
          <div className="profile-avatar-container">
            <img 
              src={profileAvatar} 
              alt="Profile avatar" 
              className="profile-avatar" 
            />
            <button className="camera-btn" aria-label="Upload photo">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>
            </button>
          </div>

          <div className="profile-details">
            <h2 className="profile-name">Marry Doe</h2>
            <p className="profile-email">Marry@Gmail.Com</p>
          </div>
        </div>

        <p className="profile-bio">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>

      <div className="profile-divider"></div>
    </div>
  )
}

export default Profile
