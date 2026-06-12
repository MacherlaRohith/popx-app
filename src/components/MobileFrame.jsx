import React from 'react'
import './MobileFrame.css'

const MobileFrame = ({ children }) => {
  return (
    <div className="mobile-frame-wrapper">
      <div className="mobile-frame">
        {children}
      </div>
    </div>
  )
}

export default MobileFrame
