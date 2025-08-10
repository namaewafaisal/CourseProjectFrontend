import React from 'react'
import { Link } from 'react-router-dom'

function Profile() {
  return (
    <div className="profile">
      <Link to="/login" className='login-page'>Login</Link>
      <Link to="/register" className='register-page'>Register</Link>
    </div>
  )
}

export default Profile