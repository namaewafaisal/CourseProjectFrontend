import React from 'react'
import { Link } from 'react-router-dom'

function Profile() {
  return (
    <div className="flex gap-2">
      <Link
        to="/login"
        className="bg-[var(--login-color)] text-white px-4 py-2 rounded hover:bg-green-900"
      >
        Login
      </Link>
      <Link
        to="/register"
        className="bg-[var(--register-color)] text-white px-4 py-2 rounded hover:bg-blue-900"
      >
        Register
      </Link>
    </div>
  )
}

export default Profile
